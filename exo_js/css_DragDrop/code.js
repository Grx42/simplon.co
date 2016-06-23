(function()
{
  var draggable = document.getElementsByClassName('draggableBox');
  for (var i=0, c=draggable.length; i < c; i++)
  {
    draggable[i].addEventListener('mousedown', function(e){attrape(e)}, false);
    document.addEventListener('mousemove', function(e){bouge(e)}, false);
    draggable[i].addEventListener('mouseup', function(e){lache(e)}, false);
  }
  var curs = {}
  function attrape(e)
  {
    curs.target = e.target;
    curs.offsetX = e.offsetX; //transfere a l'objet la position X du curseur au moment du clic sur l'element
    curs.offsetY = e.offsetY; //transfere a l'objet la position Y du curseur au moment du clic sur l'element
  }
  function bouge(e)
  {
    if (curs.target)
    {
      curs.target.style.left = (e.clientX - curs.offsetX) + "px"; //fixe la position de l'element
      curs.target.style.top = (e.clientY - curs.offsetY) + "px";
    }
  }


  function lache(e)
  {
    curs = {};
  }
})();
