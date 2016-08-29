<?php

namespace RLMainBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use RLMainBundle\Entity\Connection;
use RLMainBundle\Entity\Contact;
use RLMainBundle\Entity\Lettre;
use RLMainBundle\Entity\Recommande;
use RLMainBundle\Entity\Juriste;
use RLMainBundle\Entity\Sondage;



class DefaultController extends Controller
{
    public function indexAction(Request $request)
    {
        $ua = $request->server->get('user_agent');
        $ip = $request->getClientIp();
        if (preg_match('/iphone/i',$ua) || preg_match('/ipad/i',$ua) || preg_match('/ipod/i',$ua))
        {
            $metaResponsive =  '1.0';
        } else $metaResponsive = '0.67';
        
        $compteur = $this->actionConnection($request, $ua, $ip);
        return $this->render('RLMainBundle:Default:index.html.twig', array(
            'metaResponsive' => $metaResponsive,
            'compteur' => $compteur
        ));
    }
    
    
    public function contactAction (Request $request) 
    {
        $email = $request->request->get('Email');
        $message = $request->request->get('Message');
        if($message == "") {
            return new Response("Vous n'avez pas écrit de message");
        }
        if($email != "" || preg_match("#^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$#", $email)) {
            $em = $this->getDoctrine()->getManager();
            $sql = new Contact;
            $sql->setMail($email)
                ->setMessage($message)
                ->setType($request->request->get('type'))
                ->setNom($request->request->get('Name'))
                ->setIp($request->getClientIp())
                ->setUserAgent($request->server->get('user_agent'));
            try {
                $em->persist($sql);
                $em->flush();
                return new Response(1);
            } catch (Exception $e) {
                return new Response('Une erreur est survenue');
            }
        } else return new Response('Veuillez renseigner un mail valide');
    }
    
    public function lettreAction (Request $request) 
    {
        $type = $request->request->get('type');
        
        $em = $this->getDoctrine()
                ->getManager();
        
        $sql = new Lettre;
        $sql->setType($type)->setIp($request->getClientIp());
        try {
                $em->persist($sql);
                $em->flush();
                return $this->render('RLMainBundle:Default:lettre.html.twig', array(
                        'type' => $type
                    ));
        } catch (Exception $e) {
                return new Response(0);
        }

    }
    
    public function recommandeAction (Request $request) 
    {
        $data = $request->request->all();
        $file = $request->files->all();
        
        return new Response ($this->actionRecommande($data, $file));
        
    }
    
    public function procedureAction (Request $request) 
    {
        $typeI = $request->request->get('type');
        $em = $this->getDoctrine()
                        ->getManager();
        $sql = new Juriste();
        $sql->setIp($request->getClientIp())->setReponse(1);
        $em->persist($sql);
        $em->flush();
        
        $tab = array("Prélevement sur le dépôt de garantie sans justificatifs","Remboursement de charges","Plafonnement des loyers");
        $typeT = $tab[$typeI];
        return $this->render('RLMainBundle:Default:formulaire.html.twig', array(
                        'typeI' => $typeI,
                        'typeT' => $typeT
                    ));
    }
    
    public function sondageAction (Request $request) 
    {
        $rep = $request->request->get('sondage');
        $em = $this->getDoctrine()
                ->getManager();
        $sql = new Sondage();
        $sql->setIp($request->getClientIp())->setReponse($rep);
        $em->persist($sql);
        $em->flush();
        
        return new Response();
    }
    
    private function actionConnection ($request, $ua, $ip)
    {
        $em = $this->getDoctrine()
            ->getManager();
        
        $find = $em
            ->getRepository('RLMainBundle:Connection')
            ->findOneByIp($ip);
        
        if (!$find) {
            $sql = new Connection;
            $sql->setIp($ip)->setUserAgent($ua)->setNb(1);
            $em->persist($sql1);
        } else {
            $nb = $find->getNb();
            $find->setNb($nb+1);
        }
        
        $em->flush();
        
        /*
        * Pure PHP : 
        *
        *$sql = 'SELECT ip FROM connection WHERE ip = "'.$ip.'" AND user_agent = "'.$user_agent.'"';
        *$query = $mysqli->query($sql);
        *
        *if($query->num_rows > 0) {
        *   $sql = 'UPDATE connection SET nb = nb+1, date = NOW() WHERE ip = "'.$ip.'" AND user_agent = "'.$user_agent.'"';
        *} else {
        *    $sql = 'INSERT INTO connection (ip, user_agent, nb, date) VALUES ("'.$ip.'", "'.$user_agent.'", 1, NOW())';
        *}
        *try {
        *    $mysqli->query($sql);
        *    $mysqli->commit();
        *} catch (Exception $e) {
        *
        *   $mysqli->rollback();
        *
        *}
        */
        
        $qb = $em
            ->getRepository('RLMainBundle:Connection')
            ->createQueryBuilder('c')
            ->select('count(c.id)')
            ->getQuery();
        return $qb->getSingleScalarResult();
       
    }
    
    private function actionRecommande($data, $file) 
    {
        $pattern = array('doc', 'pdf', 'docx', 'page');
        $id = uniqid();
        $em = $this->getDoctrine()
                ->getManager();
        
        $compteur=0;
        foreach($file['fichier'] as $fichier) {
            $ext = $fichier->guessExtension();
            $nomF = $fichier->getClientOriginalName();
            $nom = $data['name'];
            if(preg_match('/(.php|.php2|.php3|.html|.htm|.xml|.xhtml|.asp|.css|.cfm|%00)/', $nomF)) {
        
                return new Response ('0');
        
            } else {
                
                if ( in_array($ext, $pattern) ) {
                    
                    if($compteur==0) {
                        $chemin = 'client/'.$id.'_'.$nom.'/';
                        $fs = new Filesystem();
                        try {
                            $fs->mkdir($chemin);
                            
                            
                            $sql = new Recommande();
                            $sql->setNom($nom)
                                ->setEmail($data['email'])
                                ->setType($data['type'])
                                ->setAdresse($data['adresse'])
                                ->setProprio($data['proprio'])
                                ->setMessage($data['message'])
                                ->setAcces($chemin);
                            $em->persist($sql);
                            
                        } catch (IOExceptionInterface $e) {
                            return "An error occurred while creating your directory at ".$e->getPath();
                        }
                        
                    }
                    $fichier->move(
                        $chemin,
                        $nomF
                    );
                }
                
            }
            $compteur++;  
        }
        $em->flush();
        return 1;
        
    }
}
