
//sick fps system
var timeri = setInterval(TimerTick, 60.333);
// ------

var changeSmiley = false;

var hymio = ":-)";


//otetaan centteri canvasi
var c = document.getElementById("canvas_center");




// piirtamiseen helpottavia muuttujia

var center_x = (c.width/2);
var center_y = (c.height/2);




function drawScreen() {
	var ctx = c.getContext("2d");
ctx.font = "30px Arial";

var lol = Math.random();
var lol2 = lol *200;
ctx.fillText(":-)",center_x+lol2,center_y+lol2);
}

function clearScreen()
{
	var ctx = c.getContext("2d");
	ctx.clearRect(0, 0, c.width, c.height);
}


function TimerTick(){

	clearScreen();
	drawScreen();
	//console.log("tik tik");
}