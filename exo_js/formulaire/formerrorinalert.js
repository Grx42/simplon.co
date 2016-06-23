var envoyer = document.getElementById('bouton');
var login = document.getElementById('login');
var nom = document.getElementById('nom');
var prenom = document.getElementById('prenom');
var mail = document.getElementById('mail');
var site = document.getElementById('website');
var mdp = document.getElementById('motdepasse');
var mdp2 = document.getElementById('motdepasse2');
var cluf = document.getElementById('boite');
var tabIdentifiant = [login, nom, prenom, mail, site, mdp, mdp2]; //tableau de variables
var resultat = '';

envoyer.addEventListener('click', function(e)
{

  for (var i=0; i < tabIdentifiant.length; i++)
  {
    var selectLabelFor = "label[for=" + tabIdentifiant[i].id + "]"; //typage string dynamique pour querySelectorAll
    var labels = document.querySelector(selectLabelFor); //recupere le texte des labels (pour msg d'erreur plus tard)
    var tiv = tabIdentifiant[i].validity; //raccourcis de syntaxe. tiv est un objet.

    for (var itemVerif in tiv) //Boucle sur l'objet ValidityState (les erreurs possibles)
    {
      if (tiv[itemVerif] == true && itemVerif != 'valid') //cherche la valeur true dans l'objet sauf si cle == 'valid'
      {
        resultat += labels.innerHTML + " " + tabIdentifiant[i].validationMessage +"\n"; //concatene label + msg d'erreur, a chaque erreur rencontree, dans variable resultat
      }
    }
  }

  if (mdp2.value != mdp.value)
  {
    resultat += document.querySelector("label[for=motdepasse2]").innerHTML + " Les mots de passe sont differents.\n"
  }
  if (cluf.validity.valueMissing == true)
  {
    resultat += "Contrat utilisateur : " + cluf.validationMessage + "\n";
  }
  if (document.getElementById('monForm').checkValidity() == true)
  {
    resultat = "Bravo, il n'y a pas d'erreur. Futur prix nobel, hein ?"
  }

  alert(resultat); //a la fin des boucles, affiche resultat qui contient toutes les erreurs
  resultat = "";
}, false);
