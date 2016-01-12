var changeSmiley = False;


var c = document.getElementById("canvas_center");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Moro",10,50);
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();