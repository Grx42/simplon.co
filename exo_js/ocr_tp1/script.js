(function debut(){

  function afficheNombre(centaines, dizaines, unites)
  {
    var tabUnites = ['un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
    var tabException = ['onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize']
    var tabDizaines = ['dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante'];
    var tabCentaines = ['cent'];

    var testException = dizaines + unites;


    if (unites + dizaines )
    {

    }
    17, 18, 19
    70, 71, 72, 73, 74, 75, 76, 77, 78, 79
    80, 81, 82, 83, 84, 85, 86, 87, 88, 89
    90, 91, 92, 93, 94, 95, 96, 97, 98, 99
    //alert(tabCentaines[centaines-1] + " " + tabDizaines[dizaines-1] + " " + tabUnites[unites-1]);
  }


  function decortique(nombre)
  {
    var reste = nombre % 100;
    var unites = reste % 10;
    var centaines = (nombre - reste) / 100;
    var dizaines = (reste - unites) / 10;

    afficheNombre(centaines, dizaines, unites);
  }

  function getNumber()
  {
    var entreeUtilisateur = prompt("Entrez un nombre de 1 a 999");
    if (isNaN(entreeUtilisateur))
    {
      alert("Non mais faut pas etre con... J'ai dit un NOMBRE !");
      getNumber();
    }
    else if(entreeUtilisateur < 1 || entreeUtilisateur > 999)
    {
      alert("ENTRE 1 ET 999 PUTAIN !");
      getNumber();
    }
    else
    {
      decortique(entreeUtilisateur);
    }
  }

  getNumber();
})();
