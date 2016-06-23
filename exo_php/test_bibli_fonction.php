<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Truc de test</title>
  </head>

  <body>

    <form method="post" action="test_bibli_fonction.php">
      <input type="text" name="test" />
    </form>
    
    <?php
    include("bibli_fonction.php");

    //ici, testez vos fonctions
    echo volume_cone(5, 20) ." cm<sup>3</sup>"; 
    
    
    
    ?>
    
  </body>
  
</html>
