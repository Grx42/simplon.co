<?php
 
$valeurs = array (32, 40, 102, 4002, 300, 1, 432, 980, 28616, 0.3223, 3.14136);
$addition = 0;

foreach ($valeurs as $num)
{
  $addition = $addition + $num;
}

echo $addition;
echo "<br /> Et arrondi, ca donne ca : " .round($addition);

echo "<br />";


$tableauAsso = array
(
  "prenom" => "Louis",
    "nom" => "Archimede",
    "liste" => "course",
    "expel" => "Arspen"
);


foreach ($tableauAsso as $cle => $valeur)
{
  echo $cle ."=>" .$valeur ."<br />";
}

  
?>
