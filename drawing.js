// sick fps system
var ticks = setInterval(TimerTick, 60.333);


// piirtamiseen helpottavia muuttujia

var center_x = (c.width/2);
var center_y = (c.height/2);

//location of smiley
var x = 0;
var y = 0;


// pushin ikä aluksi sata
var life = 100;
Pops = [];

Pop=function(el,str)
{
    this.life=0;
  this.el=el;
  	this.offx=Math.floor(Math.random()*20-10);
	this.offy=Math.floor(Math.random()*20-10);
  this.str=str;
	Pops.push(this);
}



howmany = 1; // tää on se teksti mikä lukee siinä popsissa

// kun saadaan clickkifliusta pushi
function push() {
	// ikä nollaan
	life = 0;

	 new Pop('click','+'+howmany);
}



function drawScreen() {
	var ctx = c.getContext("2d");
ctx.font = "60px Arial";

	ctx.fillText(hymio,x+center_x,y+center_y);
}

function clearScreen()
{
	var ctx = c.getContext("2d");
	ctx.clearRect(0, 0, c.width, c.height);
}

function shownumber(str,merkkix,merkkiy){
	var ctx = c.getContext("2d");
ctx.font = "20px Arial";

	ctx.fillText(str,merkkix+center_x+80,merkkiy+center_y+100);

}

function TimerTick(){
	clearScreen();

	life++;
	if (life > 2)
	{
		x = 0;
		y = 0;
	}else {

	x--;
	y--;

	}

	for (var i in Pops) {

	var merkkix=Pops[i].offx-100;
		var merkkiy=Math.pow(Pops[i].life/100,0.5)*100+Pops[i].offy-10;


shownumber(Pops[i].str, merkkix,merkkiy);

		 Pops[i].life+=2;
 if (Pops[i].life>=50) Pops.splice(i,1);

	}


	drawScreen();
	//console.log("tik tik");
}