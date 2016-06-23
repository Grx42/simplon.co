<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Calculateur fichier</title>
  </head>

  <body>
    <h1>Bienvenue sur le calculateur</h1>

      <?php

      $compte = file('./fichiers/tarifs.txt');
      $total = 0.41;
      
      foreach($compte as $entry)
      {
        $total = $total + $entry;
      }
      echo $total ."<br />";
      echo round($total);
      ?>
  </body>

</html>
