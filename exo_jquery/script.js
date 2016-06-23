$(document).ready(function() {
  $("#recupmdp").hide();
  $("#pagecontent").hide();
  var errorpwd = document.getElementById("passwd");
  var errormail = document.getElementById("lostpwd");

  $("#loginbox a").click(function(){
    $("input.logpass").attr("disabled", "1");
    $("#boitelog").hide();
    $("#recupmdp").show();
    return false;
  });

  $("#boutonLoginBox").click(function(){
    if (errorpwd.validity.valid == false || errormail.validity.valid == false)
    {
      var errormsg = document.createElement("p");
      errormsg.setAttribute("id","errormsg");
      $("body").prepend(errormsg);
      errormsg.textContent = "Erreur d'authentification";
    }
    else
    {
      $("#loginbox").hide();
      $("#pagecontent").show();
    }
  });

});
