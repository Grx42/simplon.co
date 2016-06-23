<?php

$joursTab = array ("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
$moisTab = array ("Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre");

echo "Aujourd'hui nous sommes : " .$joursTab[date("w")] ." " .date("j");
?>
