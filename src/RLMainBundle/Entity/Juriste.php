<?php

namespace RLMainBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Juriste
 *
 * @ORM\Table(name="juriste")
 * @ORM\Entity(repositoryClass="RLMainBundle\Repository\JuristeRepository")
 */
class Juriste
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
     * @ORM\Column(name="ip", type="text")
     */
    private $ip;

    /**
     * @var string
     *
     * @ORM\Column(name="reponse", type="integer")
     */
    private $reponse;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="datetime")
     */
    private $date;

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
     * Set ip
     *
     * @param string $ip
     *
     * @return Juriste
     */
    public function setIp($ip)
    {
        $this->ip = $ip;

        return $this;
    }

    /**
     * Get ip
     *
     * @return string
     */
    public function getIp()
    {
        return $this->ip;
    }

    /**
     * Set reponse
     *
     * @param integer $reponse
     *
     * @return Juriste
     */
    public function setReponse($reponse)
    {
        $this->reponse = $reponse;

        return $this;
    }

    /**
     * Get reponse
     *
     * @return integer
     */
    public function getReponse()
    {
        return $this->reponse;
    }

    /**
     * Set date
     *
     * @param \DateTime $date
     *
     * @return Juriste
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
}

