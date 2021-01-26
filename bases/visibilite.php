<?php

class Rectangle {

  private $w;
  private $h;
  public $name;

  public function __construct($w, $h) {
    $this->w = $w;
    $this->h = $h;
    $this->name = "Rectangle";
  }

  // accesseur en lecture sur la propriété w
  public function getW() {
    return $this->w;
  }
  // accesseur en écriture sur la propriété w
  public function setW($w) {
    $this->w = $w;
  }

  // "double accesseur" en écriture sur w et h
  // public function setDimensions($w, $h) {
  //   $this->w = $w;
  //   $this->h = $h;
  // }
}

$unRectangle = new Rectangle(30, 50);
$unAutreRectangle = new Rectangle(20, 35);

// une propriété public est accessible depuis l'extérieur de la classe en lecture et en écriture
echo $unRectangle->name; // "Rectangle"
$unRectangle->name = "Mon rectangle";

// une propriété private n'est pas accessible depuis l'extérieur de la classe, ni en lecture, ni en écriture
// on ne pourra la manipuler qu'à l'intérieur de la classe
// echo $unRectangle->w; // ERREUR FATALE
echo $unRectangle->getW();
// $unRectangle->name = 40; // ERREUR FATALE
$unRectangle->setW(40);

// il existe une 3è visibilité, protected, utilisée dans les cas où il y a des héritages de classes

/* l'intérêt de limiter la visibilité est de cadrer la manière dont les développeurs 
   interagiront avec les propriétés ou méthodes de la classe
   C'est private => on ne manipule pas directement depuis l'extérieur
   On peut vouloir rouvrir des accès en lecture ou en écriture sur des propriétés, mais en les cadrant.
   Dans ce cas, on utilisera des méthodes spécifiques nommées accesseurs :
    - accesseurs en lecture (getters)
    - accesseurs en écriture (setters)
*/