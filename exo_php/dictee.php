<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>dictee</title>
  </head>

  <body>


    <?php

    $dictee ="Les courses en mer

Sur les quais, la foule agglutinée qui lance à cor et à cri un au revoir aux équipages annonce l'imminence du départ. \"Ohé !\" Des mains et des mouchoirs, semblables à des oriflammes bariolées, sont agités par la famille, les amis, des enfants... Puis les ancres surjalées sont relevées: \"Larguez les amarres !\"

Qu'il s'agisse de Christophe Colomb, de Florence Arthaud ou du charismatique Eric Tabarly, que ce soit à bord de trois-mâts, de catamarans ou de simples canots, les navigateurs, inlassables, depuis la nuit des temps, ont sillonné les océans. Tous ces découvreurs d'îlots inconnus, ces marins sportifs familiers des top niveaux et ces scientifiques de haut vol ont confié leur phénoménal destin à la mer.

Dépourvus du moindre biscuit de survie, certains se sont sustentés avec des harengs pacqués, des clovisses charnues, avec du phytoplancton, voire des rhodophycées, et ont ainsi survécu. Croisant des vraquiers ou des thoniers, vainquant des vents cycloniques, ils se sont aussi dégagés de lames qui les auraient engloutis. 

Que n'auraient-ils donné alors pour rallier les atolls ensoleillés du Pacifique ou même pour voir, tel Jonas, les fanons des baleines ! \"Terre à bâbord !\" A mille milles des côtes, loin du pays qui les a vus naître, ils ont vécu dans l'immensité pélagique, là où l'horizon rejoint l'infini.

Quels qu'ils soient, un jour, après s'être laissé buriner par les embruns salés et s'être mesurés à la force des flots lors des courses transocéaniques, hantés par l'inénarrable aventure des mers, ils ont retrouvé la terre ferme.";
    
// declaration de la fonction 2 args attendu, un 3e facultatif
    function extraire_mots($dictee, $wordlen, $searchword="")
    {
//conseil kaled, declaration pour travail sur autre variable
      $dictee_propre;
      
// Epuration de la string $dictee, suppression des , . ? ! " \n \r : '
      $dictee_propre = str_replace(",", "", $dictee);
      $dictee_propre = str_replace(".", "", $dictee_propre);
      $dictee_propre = str_replace("?", "", $dictee_propre);
      $dictee_propre = str_replace("!", "", $dictee_propre);
      $dictee_propre = str_replace('"', "", $dictee_propre);
      $dictee_propre = str_replace("\n", " ", $dictee_propre);
      $dictee_propre = str_replace('\r', " ", $dictee_propre);
      $dictee_propre = str_replace(':', "", $dictee_propre);
      $dictee_propre = str_replace("'", " ", $dictee_propre);

//Tous les mots séparés par un espace sont ajoutes a $dictee_tab  
      $dictee_tab = explode(" ", $dictee_propre);

// declaration de variable
      $dictionnaire;
      
//Parcours du tableau $dictee_tab et envoi chaque mot >= a $wordlen dans $dictionnaire[]
      foreach ($dictee_tab as $word)
      {
        if (strlen($word) >= $wordlen)
        {
          $dictionnaire[] = $word;
        }
      }

//bonus++ boucle for pour pouvoir recuperer un index ($i) et modifier a la volée les strings avec -.
//fait avant tableau 2D pour m'eviter une boucle dans une boucle
// exclusion des -il -ils -elle -elles
      for ($i=0;$i < sizeof($dictionnaire);$i++)
      {
        if (preg_match("/-/", $dictionnaire[$i]))
        {
          if (preg_match("/-ils/", $dictionnaire[$i])) //ils avant il, plus precis
            {
              $dictionnaire[$i] = str_replace("-ils", "", $dictionnaire[$i]);
            }
          elseif (preg_match("/-il/", $dictionnaire[$i]))
            {
              $dictionnaire[$i] = str_replace("-il", "", $dictionnaire[$i]);
            }
          elseif (preg_match("/-elles/", $dictionnaire[$i])) //elles avant elle, meme raison
            {
              $dictionnaire[$i] = str_replace("-elles", "", $dictionnaire[$i]);
            }
          elseif (preg_match("/-elle/", $dictionnaire[$i]))
            {
              $dictionnaire[$i] = str_replace("-elle", "", $dictionnaire[$i]);
            }
          $dictionnaire[$i] = str_replace("-", " ", $dictionnaire[$i]);
        }
      }

//declaration et affectation du tableau de retour selon norme (index0 == nombre de mots, index1==mots)
      $tab_retour[0] = sizeof($dictionnaire);
      $tab_retour[1] = $dictionnaire;

//bonus, recherche de la string passé en 3e parametre
//s'active que si 3e arg est non null
      if ($searchword == !NULL)
      {
        if (in_array($searchword, $tab_retour[1])) //fonction pour chercher le mot dans le tableau
        {
          echo $searchword ." est bien présent dans le tableau !<br />";
        }
        else
        {
          echo $searchword ." n'est pas présent dans le tableau !<br />";
        }
      }

//on retourne le tableau 2D, purgé et normé
      return ($tab_retour);
    }

//declaration et affection par appel de fonction
    $tableau_a_parser = extraire_mots($dictee, 5);

//affiche le nombre de mots >= au 2e parametre
    echo $tableau_a_parser[0]."<br />";

//boucle for pour aller piocher et afficher les mots dans l'index1 (tableau 2D, tableau de tableau)
    for($i=0;$i < $tableau_a_parser[0];$i++)
    {
      echo $tableau_a_parser[1][$i]."<br />";
    }
    ?>
  </body>
</html>
