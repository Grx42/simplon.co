function main() {
  if (localStorage.length < 1) {
    var nomCommune = prompt("Veuillez entrer le nom de votre commune");
    if (nomCommune != null) {
      var codeCommune = prompt("Veuillez entrer le code INSEE de votre commune");
      if (codeCommune != null) {
        codeCommune = codeCommune.toLowerCase();
        var data = {
          "ville": nomCommune,
          "codeCom": codeCommune
        };
        var valeur = JSON.stringify(data);
        localStorage.setItem("commune", valeur);
      }
      else {
        main();
      }
    }
    else {
      main();
    }
  }
  else if (localStorage.length > 0) {
    return 0;
  }
  else {
    main();
  }
}

function ajouteUnPDL() {
  var nomPDL = prompt("Veuillez entrer un nom pour le PDL");
  if (nomPDL != null) {
    nomPDL = nomPDL.toLowerCase();
    var numPDL = prompt("Veuillez entrer le numéro d'identification du PDL");
    if (numPDL != null) {
      numPDL = numPDL.toLowerCase()
      localStorage.setItem(nomPDL, numPDL);
    }
  }
}

function deleteExistDiv() {
  if (alreadyShown == 1) {
    incrustationHtml.removeChild(incrustationHtml.children[0]);
    alreadyShown = 0;
  }
}

function afficheContenuLocalStorage() {
  if (alreadyShown == 0) {
    if (localStorage.length > 0) {
      if (!incrustationHtml.children[0]) {
        var uneDivDePlus = document.createElement("div");
        incrustationHtml.appendChild(uneDivDePlus);
      }
      var divAffichagePDL = document.querySelector("#bloc3 div");

      var communeJSON = JSON.parse(window.localStorage.getItem(localStorage.key("commune")));

      var para = document.createElement("p");
      var node = document.createTextNode(communeJSON.ville + " : " + communeJSON.codeCom);
      para.appendChild(node);
      divAffichagePDL.appendChild(para);

      for (var i = 0; i < localStorage.length; i++) {
        var para = document.createElement("p");
        if (localStorage.key(i) == "commune") {
          continue;
        }
        var node = document.createTextNode(localStorage.key(i) +" : N° "+ localStorage.getItem(localStorage.key(i)));
        para.appendChild(node);
        divAffichagePDL.appendChild(para);
      }
      alreadyShown = 1;
    }
    else {
      console.log("y a rien de set, check ton code bourricot !");
    }
  }
}

main();

var alreadyShown = 0;
var ajoutPDL = document.querySelector("#bloc1");
var declencheurIncrustation = document.querySelector("#bloc2");
var incrustationHtml = document.querySelector("#bloc3");
var divAffichagePDL = document.querySelector("#bloc3 div");
var destruction = document.querySelector("#clicsale");


/*var alreadyShown = 0;
var ajoutPDL = document.getElementById("bloc1");
var declencheurIncrustation = document.getElementById("bloc2");
var incrustationHtml = document.querySelector("#bloc3");
var divAffichagePDL = document.querySelector("#bloc3 div");
var destruction = document.getElementById("clicsale");
*/

destruction.addEventListener("click", function(e){
  localStorage.clear();
   location.reload(); 
}, false);

ajoutPDL.addEventListener('click', function(e){
  ajouteUnPDL();
}, false);

declencheurIncrustation.addEventListener('click', function(e){
  deleteExistDiv();
  afficheContenuLocalStorage();
}, false);
