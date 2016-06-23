<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Colorisation du string !</title>
  </head>
  
  <body>

    <form method="get" action="colorString.php">
      <input type="text" name="switchColor" placeholder="jaune, rouge, noir ou vert" />
    </form>
      
    <?php

    $couleur = array
    (
      "jaune" => "#F0F000",
        "rouge" => "#EA0000",
        "noir" => "#000000",
        "vert" => "#00EC10"
    );
    if (isset($_GET["switchColor"]))
    {
      echo '<p style="color:' .$couleur[$_GET["switchColor"]].'"> Phrase de test, alors va pas plus loin !</p>';
    }
    ?>

    <form method="get" action="colorString.php">
      <input type="text" name="randomColor" placeholder="Entrez un nombre" />
    </form>

    
    <?php
    $colorname = array ("jaune", "bleu", "vert", "rouge", "noir", "orange");
    $colortroll = array ("#00EC10","#000000", "#F0F000", "#EA0000", "#1F00E5", "#E58900");
    $i = 0;
    
    if (isset($_GET["randomColor"]))
    {
      while($i < $_GET["randomColor"])
        {
          echo '<div style="color:' .$colortroll[rand(0,5)] .'">' .$colorname[rand(0, 5)] .'</div>';
          $i++;
        }
    }
    
    ?>
    
  </body>
</html>
