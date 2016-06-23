var test = document.getElementsByTagName('div');
var tableau_longueur = [];
var nombre_char;

for (var i = 0, c = test.length; i < c; i++)
{
  tableau_longueur.push(test[i].innerHTML.length);
  if( i == 0 || nombre_char > tableau_longueur[i])
  {
    nombre_char = tableau_longueur[i];
  }
}

for (var i = 0, c = test.length; i < c; i++)
{
  if (test[i].innerHTML.length >= 200)
  {
    test[i].classList.add('red');
  }
  test[i].innerHTML = test[i].innerHTML.substr(0, nombre_char) + " [...]";
}

//alert(test[i].innerHTML);
var liste = document.getElementsByTagName("li");
window.alert("Il y a " + liste.length.toString() + " elements dans la page");
