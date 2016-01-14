// put all shit tpgether here


// dont even know if we need this


//actuallu lets put variables here...

//STATS

var clicks = 0;

var stars = 0;

var showClicks = false;

var showStars = false;

var showInv = false;

var superpoints = 0;


// ------

// SMILEy CHANGE

// change the smiley for cllick
var changeSmiley = false;
//what the smiley looks like
var hymio = ":-)";

// ----------------


//center canvas
var c = document.getElementById("canvas_center");



// Klikkauksen multiplieri, voi näyttää vaikka muutaki kivaa tässä
var howmany = "ERROR";





// LAITA INVENTORY

function laitaInventory()
{
	$('.invbutton').delay(1).fadeIn(300);
$(".invbutton").css({"margin-left": "0%", "bottom": "64%","border": "solid 1px #000000","height": "4%","left":"0px","width":"5%", "font-size": "20" });
}



function updateArrayToInv()
{
for(var x=0; x<updates.length; x++){
	
	
	var updatenimi = "jeah";
	if (updates[x] == 1)
	{
		updatenimi = "Better Stats";
	}
		if (updates[x] == 2)
	{
		updatenimi = "Slave";
	}
		if (updates[x] == 3)
	{
		updatenimi = "Mutant";
	}
		if (updates[x] == 4)
	{
		updatenimi = "Jee";
	}
	
    $('.inv').append('<div class="update'+updates[x]+'" id="' + updates[x] + ' " onClick="BuySomething(this)">' + updatenimi + '</div>');
}
}