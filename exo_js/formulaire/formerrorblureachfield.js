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

var compteurFonction = 0;

envoyer.addEventListener('click', function(e)
{
  if (compteurFonction > 0)
  {
    var aDelete = document.querySelector('body');
    var delTest = document.getElementById('finish');

    for (var j=0, c = aDelete.childElementCount; j < c; j++)
    {
      if(aDelete.children[j] == delTest)
      {
        aDelete.removeChild(aDelete.children[j]);
      }
    }
  }

  var logFinish = document.createElement('section');
  logFinish.setAttribute("id", "finish");
  var logTitre = document.createElement("h2");
  logTitre.textContent = "Resultat :";
  document.querySelector('body').appendChild(logFinish);
  document.getElementById('finish').appendChild(logTitre);

  for (var i=0; i < tabIdentifiant.length; i++)
  {
    var selectLabelFor = "label[for=" + tabIdentifiant[i].id + "]"; //typage string dynamique pour querySelectorAll
    var labels = document.querySelector(selectLabelFor); //recupere le texte des labels (pour msg d'erreur plus tard)
    var tiv = tabIdentifiant[i].validity; //raccourcis de syntaxe. tiv est un objet.

    for (var itemVerif in tiv) //Boucle sur l'objet ValidityState (les erreurs possibles)
    {
      if (tiv[itemVerif] == true && itemVerif != 'valid') //cherche la valeur true dans l'objet sauf si cle == 'valid'
      {
        var logResultat = document.createElement('p');
        logResultat.textContent = labels.innerHTML + " " + tabIdentifiant[i].validationMessage; //concatene label + msg d'erreur, a chaque erreur rencontree
        document.getElementById('finish').appendChild(logResultat);
      }
    }
  }

  if (mdp2.value != mdp.value)
  {
    var logResultat = document.createElement('p');
    logResultat.textContent = document.querySelector("label[for=motdepasse2]").innerHTML + " Les mots de passe sont differents."
    document.getElementById('finish').appendChild(logResultat);
  }
  if (cluf.validity.valueMissing == true)
  {
    var logResultat = document.createElement('p');
    logResultat.textContent = "Contrat utilisateur : " + cluf.validationMessage;
    document.getElementById('finish').appendChild(logResultat);
  }
  if (document.getElementById('monForm').checkValidity() == true)
  {
    var logResultat = document.createElement('p');
    logResultat.textContent = "Bravo, il n'y a pas d'erreur. Futur prix nobel, hein ?"
    document.getElementById('finish').appendChild(logResultat);
  }

  //document.getElementById('finish').appendChild(logResultat);
  //document.getElementById('errorlog').textContent = resultat;


/*  var logResultat = document.createElement('p');
  logResultat.setAttribute("id", "errorlog");*/
  compteurFonction += 1;
  //resultat = "";
}, false);





/*
console.log(labels[0].innerHTML); debug et aide memoire.
console.log(tiv[itemVerif]);
console.log(typeof(itemVerif));
tabTest.push(itemVerif);
console.log(boucle.itemVerif);
console.log(mdp.validationMessage);
console.log(mdp.checkValidity());
console.log(mdp.validity);*/

/*
valueMissing
typeMismatch
patternMismatch
tooLong
rangeUnderflow
rangeOverflow
stepMismatch
badInput
customError
valid
*/
