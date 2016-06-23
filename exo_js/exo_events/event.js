function change_li(genre, disp)
{

  var tab = document.querySelectorAll("." + genre);
  for (var i = 0; i < action.length) {  }



  if(genre == "men")
  {
    var show = document.querySelectorAll(".men");
    for (var i=0, c=show.length; i < c; i++)
    {
      show[i].classList.remove('cachetoi');
    }

    var cacher = document.querySelectorAll(".women");
    for (var i=0, c=cacher.length; i < c; i++)
    {
      cacher[i].classList.add('cachetoi');
    }
  }
  else if (genre == "women")
  {
    var show = document.querySelectorAll(".women");
    for (var i=0, c=show.length; i < c; i++)
    {
      show[i].classList.remove('cachetoi');
    }

    var cacher = document.querySelectorAll(".men");
    for (var i=0, c=cacher.length; i < c; i++)
    {
      cacher[i].classList.add('cachetoi');
    }
  }
  else
  {
    var show = document.querySelectorAll("li");
    for (var i=0, c=show.length; i < c; i++)
    {
      show[i].classList.remove('cachetoi');
    }
  }
}
