<?php

$tableau2d = array(
  array("Paris", 48.856578, 2.351828),
  array("Nantes", 47.21806, -1.55278),
  array("Lyon", 45.759723, 4.842223),
  array("Bruxelles", 50.846667, 4.3525),
  array("Bordeaux", 44.837912, -0.579541),
  array("Toulouse", 43.604482, 1.443962),
  array("Montpellier", 43.611944, 3.877222),
  array("Marseille", 43.296346, 5.369889),
  array("Tours", 47.393611, 0.689167),
  array("Lille", 50.637222, 3.063333),
  array("Strasbourg", 48.573392, 7.752353)
 );

function gps_to_km_btw_cities($info_villes)
{
  $dist_bt_city = array();

  for($i = 0; $i < sizeof($info_villes); $i++)
  {
    for($j = 0; $j < sizeof($info_villes); $j++)
    {
      if($i != $j)
      {
        $lat = ($info_villes[$i][1] - $info_villes[$j][1]) ** 2;
        $long = ($info_villes[$i][2] - $info_villes[$j][2]) ** 2;
        $calc = Sqrt($lat + $long) * 100;
        $dist_bt_city[$info_villes[$i][0]][$info_villes[$j][0]] = round($calc);
      }
    }
  }
  return ($dist_bt_city);
}

?>
