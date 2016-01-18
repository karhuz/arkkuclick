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

// +1 +2 yms multiplier paska
Pops = [];

Pop=function(el,str)
{
    this.life=0;
  this.el=el;
  	this.offx=Math.floor(Math.random()*30-10);
	this.offy=Math.floor(Math.random()*50-10);
  this.str=str;
	Pops.push(this);
}

// tahden droppaussysteemi (eli kopsattu popsijuttu :D)

Drops = [];

Drop=function(el,str)
{
    this.life=0;
  this.el=el;
  	this.offx=Math.floor(Math.random()*30-10);
	this.offy=Math.floor(Math.random()*50-10);
  this.str=str;
	Drops.push(this);
}




//howmany = 1; // tää on se teksti mikä lukee siinä popsissa

// kun saadaan clickkifliusta pushi
function push() {
	// ikä nollaan
	life = 0;

	 new Pop('click','+'+howmany);
}


// NÄYTTÖÖN PIIRTÄMIS FUNCTIO :D
function drawScreen() {
	//var ctx = c.getContext("2d");
//ctx.font = "60px Arial";

// piirretään valkonen neliö
$('canvas').drawRect({
	layer: true,
	 groups: ['hymio'],
  name: 'box',
  fillStyle: '#FFFFFF',
    strokeStyle: '#000000',
  strokeWidth: 1,
  x: x+center_x, y: y+center_y,
  width: 427,
  height: 320,
  click: function(CLICK) {
  }
});

//hymiö
$('canvas').drawText({
	layer: true,
	 groups: ['hymio'],
  name: 'smiley',
  fillStyle: '#000000',
  x: x+center_x, y: y+center_y,
  fontSize: 48,
  fontFamily: 'Verdana, sans-serif',
  text: hymio
});


// KLIKKISTATSIT TÄHÄ
if (showClicks == true)
{
	$('canvas').drawText({
  fillStyle: '#000000',
  x: 100, y: 125,
  fontSize: 22,
  fontFamily: 'Verdana, sans-serif',
  text: 'Clicks: ' +clicks
});
}

if (showStars == true)
{
	$('canvas').drawText({
  fillStyle: '#000000',
  x: 250, y: 125,
  fontSize: 22,
  fontFamily: 'Verdana, sans-serif',
  text: '*: ' +stars
});

}
	//$('canvas').drawLayers();
	//ctx.fillText(hymio,x+center_x,y+center_y);
}

/*function clearScreen()
{
	var ctx = c.getContext("2d");
	ctx.clearRect(0, 0, c.width, c.height);
}*/ 
// DONT need this anymore ^lol

function shownumber(str,merkkix,merkkiy){
	//var ctx = c.getContext("2d");
//ctx.font = "20px Arial";

	//ctx.fillText(str,merkkix+center_x+80,merkkiy+center_y+100);


	$('canvas').drawText({
  fillStyle: '#000000',
  x: merkkix+center_x+80, y: merkkiy+center_y+100,
  fontSize: 28,
  fontFamily: 'Verdana, sans-serif',
  text: str
});

}


// NÄYTETÄÄN LOOTTI

function showloot(str,merkkix,merkkiy){
	//var ctx = c.getContext("2d");
//ctx.font = "20px Arial";

	//ctx.fillText(str,merkkix+center_x+80,merkkiy+center_y+100);


	$('canvas').drawText({
  fillStyle: '#EAFF00',
  x: merkkix+center_x+80, y: merkkiy+center_y+100,
  fontSize: 62,
  fontFamily: 'Verdana, sans-serif',
  text: str
});

}



//RENDERAUS YMS LASKUT

function TimerTick(){


	// klikkauksee liittyvää paskaaa

if (clicks>=10) showClicks = true;

if (superpoints>=25)
{
	superpoints = 0;
	showStars = true;
	 new Drop('item','*');
	 stars++;
}

if (clicks>=100) showInv = true;

if (showInv == true) 
{
	$('.inv').delay(1).fadeIn(300);
		$('.invbutton').delay(1).fadeOut(300);
		$( ".inv" ).text("");
		updateArrayToInv();
	showInv = false;
}




//-----


	//clearScreen();
	//tyhjennetaanruutu
	$('canvas').clearCanvas();

		//piirretään ruutu
	drawScreen();


// hieno systeemi mikä bumpauttaa tota hymiötä vähän
	life++;
	if (life > 2)
	{
		x = 0;
		y = 0;
	}else {

	x--;
	y--;

	}


//tehään nää tyhmät +1 +2 jne merkit erikseen(wHY?!)
	for (var i in Pops) {

	var merkkix=Pops[i].offx-100;
		var merkkiy=Math.pow(Pops[i].life/50,0.5)*120+Pops[i].offy-10;


shownumber(Pops[i].str, merkkix,merkkiy);

		 Pops[i].life+=2;
 if (Pops[i].life>=50) Pops.splice(i,1);

	}




	// LOOTIN TMS DROPPAUUS SYSTEEEMI

	for (var i in Drops) {

	var merkkix=Drops[i].offx-100;
		var merkkiy=Math.pow(Drops[i].life/50,0.5)*120+Drops[i].offy-10;


showloot(Drops[i].str, merkkix,merkkiy);

		 Drops[i].life+=2;
 if (Drops[i].life>=200) Drops.splice(i,1);

	}
	//console.log("tik tik");
}