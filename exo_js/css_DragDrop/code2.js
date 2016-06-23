(function()
{
  var myElements = document.getElementsByClassName("draggableBox");
  var proprietes = {};
  var verif = 0;
  for (var i = 0, c = myElements.length; i < c; i++)
  {
    myElements[i].addEventListener('mousedown', function(e)
    {
      verif = 1;
      proprietes.target = e.target;
      proprietes.offsetX = e.offsetX;
      proprietes.offsetY = e.offsetY;
    }, false);
    if (proprietes.target)
    {
      if (verif == 1)
      {
        myElements[i].removeEventListener('mousedown', function(e){}, false);
      }
    }
    document.addEventListener('mousemove', function(e)
    {
      if(proprietes.target)
      {
        proprietes.target.style.left = (e.clientX - proprietes.offsetX) + "px";
        proprietes.target.style.top = (e.clientY - proprietes.offsetY) + "px";
      }
    }, false);
    myElements[i].addEventListener('mouseup', function(e)
    {
      proprietes = {};
    }, false);
  }
})();
