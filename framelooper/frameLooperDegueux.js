var id_li = ['lien0','lien1','lien2'];
var id_a = ['lien0_0','lien1_1','lien2_2'];
var id_p = ['lien0_1','lien1_2','lien2_3'];
var tab_lien = ["http://www.google.com", "http://www.facebook", "http://www.yahoo.com"]

function afficheLiens(i, myArray)
{
  var interval = setInterval(function() {
    if(myArray.length <= 1)
    {
      clearInterval(interval);
    }
    document.getElementById(id_p[i]).innerHTML += myArray.shift();
  }, 70);
}

function frameLooper()
{
  var i = 0;

  var texte = document.getElementById('menu' + i);
  var myString = texte.textContent;
  var myArray = myString.split("");

  var test_li = document.createElement('li');
  test_li.setAttribute("id", id_li[i]);
  document.getElementById("liste_menu").appendChild(test_li);

  var test_a = document.createElement('a');
  test_a.setAttribute("id", id_a[i]);
  test_a.setAttribute("href", tab_lien[i]);
  document.getElementById(id_li[i]).appendChild(test_a);

  var test_p = document.createElement('p');
  test_p.setAttribute("id", id_p[i]);
  document.getElementById(id_a[i]).appendChild(test_p);

  afficheLiens(i, myArray);
  i++;
  
  var intervale_ligne = setInterval(function()
  {
    if (i == 3)
    {
      clearInterval(intervale_ligne);
    }
    else
    {
      var texte = document.getElementById('menu' + i);
      var myString = texte.textContent;
      var myArray = myString.split("");

      var test_li = document.createElement('li');
      test_li.setAttribute("id", id_li[i]);
      document.getElementById("liste_menu").appendChild(test_li);

      var test_a = document.createElement('a');
      test_a.setAttribute("id", id_a[i]);
      test_a.setAttribute("href", tab_lien[i]);
      document.getElementById(id_li[i]).appendChild(test_a);

      var test_p = document.createElement('p');
      test_p.setAttribute("id", id_p[i]);
      document.getElementById(id_a[i]).appendChild(test_p);

      afficheLiens(i, myArray);
      i++;
    }
  }, 1000, i);
}
