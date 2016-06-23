

<?php

function DireBonjour($nom)
{
  echo "Bonjour " .$nom ."<br />";
}

function volume_cone($rayon, $hauteur)
{
  $volume =  ($rayon * $rayon) * pi() * $hauteur * (1/3);
  return($volume);
}


?>
