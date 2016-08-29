<?php

namespace RLMainBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Sondage
 *
 * @ORM\Table(name="sondage")
 * @ORM\Entity(repositoryClass="RLMainBundle\Repository\SondageRepository")
 */
class Sondage
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
     * @var bool
     *
     * @ORM\Column(name="reponse", type="boolean")
     */
    private $reponse;

    /**
     * @var string
     *
     * @ORM\Column(name="ip", type="string", length=255)
     */
    private $ip;

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
     * Set reponse
     *
     * @param boolean $reponse
     *
     * @return Sondage
     */
    public function setReponse($reponse)
    {
        $this->reponse = $reponse;

        return $this;
    }

    /**
     * Get reponse
     *
     * @return bool
     */
    public function getReponse()
    {
        return $this->reponse;
    }

    /**
     * Set ip
     *
     * @param string $ip
     *
     * @return Sondage
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
     * Set date
     *
     * @param \DateTime $date
     *
     * @return Sondage
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

