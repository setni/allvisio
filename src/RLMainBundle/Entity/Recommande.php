<?php

namespace RLMainBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Recommande
 *
 * @ORM\Table(name="recommande")
 * @ORM\Entity(repositoryClass="RLMainBundle\Repository\RecommandeRepository")
 */
class Recommande
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="nom", type="string", length=255)
     */
    private $nom;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", length=255)
     */
    private $email;

    /**
     * @var string
     *
     * @ORM\Column(name="adresse", type="text")
     */
    private $adresse;

    /**
     * @var int
     *
     * @ORM\Column(name="type", type="integer")
     */
    private $type;

    /**
     * @var string
     *
     * @ORM\Column(name="proprio", type="text")
     */
    private $proprio;

    /**
     * @var string
     *
     * @ORM\Column(name="message", type="text")
     */
    private $message;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="datetime")
     */
    private $date;

    /**
     * @var string
     *
     * @ORM\Column(name="acces", type="string", length=255)
     */
    private $acces;

    public function __construct()
    {
        $this->date = new \Datetime();
    }
    
    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set nom
     *
     * @param string $nom
     *
     * @return Recommande
     */
    public function setNom($nom)
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * Get nom
     *
     * @return string
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * Set email
     *
     * @param string $email
     *
     * @return Recommande
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set adresse
     *
     * @param string $adresse
     *
     * @return Recommande
     */
    public function setAdresse($adresse)
    {
        $this->adresse = $adresse;

        return $this;
    }

    /**
     * Get adresse
     *
     * @return string
     */
    public function getAdresse()
    {
        return $this->adresse;
    }

    /**
     * Set type
     *
     * @param integer $type
     *
     * @return Recommande
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * Get type
     *
     * @return int
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Set proprio
     *
     * @param string $proprio
     *
     * @return Recommande
     */
    public function setProprio($proprio)
    {
        $this->proprio = $proprio;

        return $this;
    }

    /**
     * Get proprio
     *
     * @return string
     */
    public function getProprio()
    {
        return $this->proprio;
    }

    /**
     * Set message
     *
     * @param string $message
     *
     * @return Recommande
     */
    public function setMessage($message)
    {
        $this->message = $message;

        return $this;
    }

    /**
     * Get message
     *
     * @return string
     */
    public function getMessage()
    {
        return $this->message;
    }

    /**
     * Set date
     *
     * @param \DateTime $date
     *
     * @return Recommande
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date
     *
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set acces
     *
     * @param string $acces
     *
     * @return Recommande
     */
    public function setAcces($acces)
    {
        $this->acces = $acces;

        return $this;
    }

    /**
     * Get acces
     *
     * @return string
     */
    public function getAcces()
    {
        return $this->acces;
    }
}

