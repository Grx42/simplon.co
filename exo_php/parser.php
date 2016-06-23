<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8" />
    <title>Parser tableau</title>
    <style>
    td, table, th
    {
      border: 1px solid black;
    }
        
    </style>
    
  </head>

  <body>

    <?php

    $tableau_artistes = array('Michel'=>'520', 'Johnny'=>'100000', 'Tarrus'=>'230', 'Bob'=>'14444', 'Kurt'=>'2700', 'Queen'=>'20000');
    $succes_com;
    $echec_com;
    
    foreach ($tableau_artistes as $cle => $valeur)
    {
      if (intval($valeur) >= 10000)
      {
        echo $cle ."<p> a vendu plus de 10 000 albums ! Bravo ! </p>";
        $succes_com[] = $cle;
      }
      else
      {
        echo $cle ."<p> n'a pas percé dans le metier. D'ici quelques années l'artiste ou le groupe se produira dans des maisons de retraites </p>";
        $echec_com[] = $cle;
      }
    }

    echo "<p> tableau reussite com, ventes > a 10k</p><br />";
    foreach ($succes_com as $entree)
    {
      echo $entree ."<br />";
    }

    
    echo "<p> tableau echec com, ventes < a 10k</p><br />";
    foreach ($echec_com as $entree)
    {
      echo $entree ."<br />";
    }
    ?>

    <table>
      <tr>
        <th>Artiste</th>
        <th>Ventes</th>
        <th>Résultat commercial</th>

      </tr>
      <?php

      foreach ($tableau_artistes as $cle => $valeur)
      {
        echo "<tr>";
        if (intval($valeur) >= 10000)
        {
          echo "<td>";
          echo $cle;
          echo "</td>";
          echo "<td>";
          echo $valeur;
          echo "</td>";
          echo "<td>";
          echo "Succès";
          echo "</td>";
        }
        else
        {
          echo "<td>";
          echo $cle;
          echo "</td>";
          echo "<td>";
          echo $valeur;
          echo "</td>";
          echo "<td>";
          echo "Echec";
          echo "</td>";
        }

        echo "</tr>";
      }
      
      
      ?>
    </table>

    
  </body>

    
</html>
