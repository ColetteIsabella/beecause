frameRate =  30;
timeInterval = Math.round( 1000 / frameRate );
atimer = setInterval("animateCharacter()", timeInterval );

var relMouseX = 0;
var relMouseY = 0;

$(document).ready(function(){
  offset = $("#game").offset();
});


$(document).mousemove(function(b){
  mouseX = b.pageX;
  mouseY = b.pageY;
  relMouseX = mouseX - offset.left;
  relMouseY = mouseY - offset.top;
});

function animateCharacter(){
  $("#character").css("left", relMouseX);
  $("#character").css("top", relMouseY);
}

