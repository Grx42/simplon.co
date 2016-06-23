$(document).ready(function(){

  $( "#menu1" ).menu();
  $( "#menu2" ).menu();
  $( "#menu3" ).menu();
  $(".menucache").hide();

  /*$("#pouet1").hover($("#menu1").show(), $("#menu1").hide());
  $("#pouet2").hover($("#menu2").show(), $("#menu2").hide());
  $("#pouet3").hover($("#menu3").show(), $("#menu3").hide());*/

  $("#pouet1").mouseenter(function(){
    $("#menu1").show();
  });
  $("#pouet1").mouseleave(function(){
    $("#menu1").hide();
  });

  $("#pouet2").mouseenter(function(){
    $("#menu2").show();
  });
  $("#pouet2").mouseleave(function(){
    $("#menu2").hide();
  });

  $("#pouet3").mouseenter(function(){
    $("#menu3").show();
  });
  $("#pouet3").mouseleave(function(){
    $("#menu3").hide();
  });

  $("#diaporama").bjqs({
    height : 320,
    width : 620,
    responsive : true
  });
});
