// Copyright Pertti Roitto 2015
//
//


var iik = 0;
var aak = 0;
var clickCounter = 0;
var clicks = 0;
var naama = 1;
var tahti = 0;
var hattuclick = false;
var logibuttonnaytto = true;

var timeri = setInterval(TimerClicks, 1000);


var sekunnit;
var clicksSekunnissa = 0;
klikitsekunnissa();

//UPDATET

/*
//BETTER STATS
var bstatsname = "Better stats";
var bstatstext = "You can see stats better, and clicks per second.";
var bstatsnumber = 0;
var bstatsPrice = 4;



//SLAVE
var slavename = "Slave";
var slavetext = "This dumb slave will click the stupid smiley for you.";
var slavesnumber = 0;
var slavePrice = 1.5;
var slavePriceMultiplier = 1.12;


// MUTANT

var mutantname = "Mutant";
var mutanttext = "This strange creature will be happy to smash that smiley. Mutant has three hands so he can clicks faster.";
var mutantnumber = 0;
var mutantPrice = 2.5;
var mutantPriceMultiplier = 1.05;

*/


// INVENTORYYN UPDATE LISTA
var updates=new Array(1,2,3,4);





var element = document.getElementById('tietoa');

var save_link = document.getElementById("save_link");
var load_link = document.getElementById("load_link");

// onko jqueryä
if (window.jQuery) {  
    console.log("jej jquery");
	$('.popup').hide();
	$('.stuff').hide();
	$('.invbutton').hide();
	$('.inv').hide();
	$('#logbutton').hide();
	updateLog("AwesomeConsole Versio 6.9");
	$('.update_info').hide();
	$('.stats_bar').hide();
} else {
    console.log("no jquery");
}


//tsekataanko voiko selaimee tallentaaa
function supports_html5_storage()
{
      try
      {
        return 'localStorage' in window && window['localStorage'] !== null;
      }
      catch (e)
      {
        return false;
      }
}


// kun peli tallennetaan -----------------------------------------------
 save_link.onclick = function() {
	 console.log("tallennetaan..");
	 showPopup("Saving game..");
	 
	 //tallennetaan local storageen
	 localStorage.setItem("secret_clicks", clicks);
	 localStorage.setItem("secret_counter", clickCounter);
	 	 localStorage.setItem("secret_aak", aak);
	 localStorage.setItem("secret_tahti", tahti);
	 
	 console.log(localStorage.getItem("secret_clicks"));
	 return false;
 }
 
 //-------------------------------------------------------------------
 
 
 // KUN PELI LADATAAN -------------------------------------------------------
  load_link.onclick = function() {
	 console.log("ladataan..");
	 //katotaan onko local storagessa
	 	 var secret_load = localStorage.getItem("secret_clicks");
	 var secret_load_counter = localStorage.getItem("secret_counter");
	 var secret_load_aak = localStorage.getItem("secret_aak");
	 var secret_load_tahti = localStorage.getItem("secret_tahti");

	 
	 //jos ei ole ladattavaa
	 if (secret_load == null)
	 {
	console.log("Nuthing to load :(");
		 // NÄYTETÄÄN POPUPPI
showPopup("Load error..");
updateLog("Load error..");
	return false;
	
	//jos on ladattavaa
	 }else{
		 	 // NÄYTETÄÄN POPUPPI
showPopup("Loading...");
updateLog("Loaded..");
	 clicks = secret_load;
	 clickCounter = secret_load_counter;
	 	 aak = secret_load_aak;
	 tahti = secret_load_tahti;
	 console.log(clicks);
	  console.log(clickCounter);
	  document.getElementById("clicks").innerHTML = clicks;
	  
	  if (tahti > 0)
	  {
		  UpdateStarPoints();
	  }
	  
	  if (clicks >50)
{
	$( ".tieto" ).text( "<|;-)"); 
}
	  
	 return false;
	 }
 }
 
 //------------------------------------------------------------------------

// nollataan animaatiot aina lopussa
element.addEventListener('webkitAnimationEnd', function(){
    this.style.webkitAnimationName = '';
}, false);


// kun painetaan keskidiviä... tästä se kaikki lähti:D
function moiMitakuuluu() { 
CLICK();
	 }
	 
	 
	 //KOMENTOJA---------------------------------------------------------
	 
	 //resetoi numerot..... KESKEN
function reset()
{
	//resetoi numerot..... KESKEN
	iik = 0;
	clicks = 0;
	tahti = 0;
	aak = 0;
    clickCounter = 0;
	console.log("Numbers very such reset");
}

//buginen paska klikkikoodi jota on turha käyttää jos osaa käyttää addSuperClikkiä :d
function addClicks(lol)
{
	clicks = lol;
	console.log(lol +" amount of clicks added ya dirty cheater");
}


// tyhmä funktio mikä laittaa kaiken lagittamaan tarpeeks suurilla luvuilla
function addSUPERCLICKS(lol)
{
	for (i = 0; i < lol; i++) { 
   CLICK();
}
	console.log("you want to crash the browser? :D");
}



//---------------------------------------------------------------------
//LOGIUPDATE
function updateLog(text)
{
	//päivitetään logiboxi
	$('#logibox').val($('#logibox').val()+'\n'+text); 
	 $('#logibox').scrollTop($('#logibox')[0].scrollHeight);
	 
	 //lasketaan rivimääärät
	 var text = $("#logibox").val(); 
	  var lines = text.split(/\r|\r\n|\n/);
var count = lines.length;

//jos rivejä on enemmänjuin joku luku niin otetaan ensimmäinen rivi veke
if (count >25)
{
var lines2 = text.split('\n');
lines2.splice(0,1);
var newtext = lines2.join('\n');

$('#logibox').val(newtext); 
$('#logibox').scrollTop($('#logibox')[0].scrollHeight);
}

}

// POP UPIN NÄYTTÖ
function showPopup(text)
{
		 $('.popup').delay(1).fadeIn(300).delay(1000).fadeOut(300);
	 $( ".popup" ).text(text);
}

// kun hattua painaa
$( ".invbutton" ).click(function() {
	if (hattuclick == true)
	{
	updateLog("You found an inventory inside the hat!");
	showPopup("You found an inventory inside the hat!");
   $( this ).delay(600).fadeOut(300);
  hattuclick = false;
  setTimeout(laitaInventory, 1000)
	}else{
		$('.inv').delay(1).fadeIn(300);
		$('.invbutton').delay(1).fadeOut(300);
		$( ".inv" ).text("");
		updateArrayToInv();
	}
});

//laitetaan inventory reunaan
function laitaInventory()
{
	$('.invbutton').delay(1).fadeIn(300);
$(".invbutton").css({"margin-left": "0%", "bottom": "64%","border": "solid 1px #000000","height": "4%","left":"0px","width":"5%", "font-size": "20" });
}


//laitetaan tavaray inventoryyn..

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


// PURCHASE NAPIN PAINALLUS ---------------------------------------------
$("#purchase_button").click(function()
{
	
	//SLAVE
	
   	if (tahti >= slave.price)
	{
		
		if (linkinID == 2)
	{
		tahti = tahti - slave.price;
		slave.price = slave.price * slave.multiplier;
		slave.number++;
		updateLog("tähtiä jöljellä: "+tahti);
		updateLog("slaven uusi hinta: "+slave.price);
		UpdateStarPoints();
		
			$('.update_info_title').text(slave.name + " " + "(" + slave.number + ")" );
	$('.update_info_text').text(slave.text);
	$('.update_info_stats').text("Price: " + slave.price + " *");
	
		if (tahti < slave.price)
	{
		$('#purchase_button').attr("disabled", true);
	}
	
	}

	}
	
	// BETTER STATS
	
	if (tahti >= bstats.price)
	{
		
		if (linkinID == 1)
	{
		tahti = tahti - bstats.price;
		bstats.number++;
		updateLog("tähtiä jöljellä: "+tahti);
		UpdateStarPoints();
		
			$('.update_info_title').text(bstats.name + " " + "(" + bstats.number + ")" );
	$('.update_info_text').text(bstats.text);
	$('.update_info_stats').text("Price: " + bstats.price + " *");
		$('#purchase_button').attr("disabled", true);
		$('.update_info').hide();
		addStatsBar();
		    updates.splice(0, 1);
		$( ".inv" ).empty();
		updateArrayToInv();
	
	}

	}
	
	
	// MUTANTTI
	
	if (tahti >= mutantPrice)
	{
		
		if (linkinID == 3)
	{
		tahti = tahti - mutantPrice;
		mutantPrice = mutantPrice * mutantPriceMultiplier;
		mutantnumber++;
		updateLog("tähtiä jöljellä: "+tahti);
		updateLog("mutantin uusi hinta: "+mutantPrice);
		UpdateStarPoints();
		
			$('.update_info_title').text(mutantname + " " + "(" + mutantnumber + ")" );
	$('.update_info_text').text(mutanttext);
	$('.update_info_stats').text("Price: " + mutantPrice + " *");
	
		if (tahti < mutantPrice)
	{
		$('#purchase_button').attr("disabled", true);
	}
	
	}

	}
	
	
});



// KUN PAINAA JOTAIN NAPPIA INVISTÄ
//--------------------------------------------------------------------

var linkinID = 0;
function BuySomething(id) { 
linkinID = id.id;
$('.update_info').show();
$('.update_info_title').text(id.id);
//updateLog("ostetaan"+linkinID);
			 $('#purchase_button').attr("disabled", true);
			 
			 	//muutetaan muut vihreeks
	 $(".update1").css("background-color", "#0C9");
	  $(".update2").css("background-color", "#0C9");
	   $(".update3").css("background-color", "#0C9");
	    $(".update4").css("background-color", "#0C9");
			 
			 
			 //BETTER STATS
if (linkinID == 1)
{
	$(".update1").css("background-color", "yellow");
	
	
$('.update_info_title').text(bstats.name + " " + "(" + bstats.number + ")" );
	$('.update_info_text').text(bstats.text);
	$('.update_info_stats').text("Price: " + bstats.price + " *");
	
	if (tahti >= bstats.price)
	{
		$('#purchase_button').attr("disabled", false);
	}
}


//SLAVE
if (linkinID == 2)
{
	 
	 
	 //muutetaan väri keltaseks
	 $(".update2").css("background-color", "yellow");
	
	$('.update_info_title').text(slave.name + " " + "(" + slave.number + ")" );
	$('.update_info_text').text(slave.text);
	$('.update_info_stats').text("Price: " + slave.price + " *");
	
	if (tahti >= slave.price)
	{
		$('#purchase_button').attr("disabled", false);
	}
}

//MUTANT
if (linkinID == 3)
{
	 
	 
	 //muutetaan väri keltaseks
	 $(".update3").css("background-color", "yellow");
	
	$('.update_info_title').text(mutantname + " " + "(" + mutantnumber + ")" );
	$('.update_info_text').text(mutanttext);
	$('.update_info_stats').text("Price: " + mutantPrice + " *");
	
	if (tahti >= mutantPrice)
	{
		$('#purchase_button').attr("disabled", false);
	}
}

}

// TYHMÄ TIMERI JOKA ADDAA SITTE KLIKKEJÄ KIVASTI JOTENKI? :D

function TimerClicks() {
	for (i = 0; i < slave.number; i++) { 
   CLICK();
}

for (i = 0; i < mutantnumber; i++) { 
   CLICK();
   CLICK();
   CLICK();
}
}


// KLIKKIFUNCTIO
//---------------------------------------------------------------------------------------------
function CLICK(){
	
	//monta klikkiä sekunnissa
	clicksSekunnissa++;
	
	// monta klikkiä yhteensä
		clicks++;
	
	document.getElementById("tietoa").style.webkitAnimationName = "punch";
if (clickCounter > 0)
{
document.getElementById("clicks").innerHTML = clicks; 
}
if (clicks >99){
	document.getElementById("saveslot").style.display = "block";
}

if (clicks == 50)
{
	showPopup("Cool! A HAT!");
	updateLog("Cool! A HAT!");
}

if (clicks > 2)
{
	if (logibuttonnaytto == true)
	{
	$('#logbutton').show();
	logibuttonnaytto = false;
	
	}
}

// TIPUTETAAAN HATTU
if (clicks == 202)
{
	showPopup("Oh no! My hat fell!");
	updateLog("Oh no! My hat fell!");
	
	$('.stuff').css({ 'font-size': 60 });
	$( ".stuff" ).text( "<|"); 
	document.getElementById("stuff").style.webkitAnimationName = "liikutaalas";
	$('.stuff').delay(1).fadeIn(300).delay(550).fadeOut(100);
		//$( ".invbutton" ).animate({ "top": "-=50px" }, "slow" );
		$( ".invbutton" ).text( "<|"); 
		$('.invbutton').css({ 'font-size': 60 });
		$('.invbutton').delay(501).fadeIn(300);
		hattuclick = true;
}

	if (naama === 1){  

if (clicks >50 && clicks < 202)
{
	$( ".tieto" ).text("<|;-("); 
iik++; 
console.log(iik);
naama = 0;
}
else{

$( ".tieto" ).text(";-("); 
iik++; 
console.log(iik);
naama = 0;
}
}else {     

if (clicks >50  && clicks < 202)
{
	$( ".tieto" ).text("<|;-)"); 
iik++; 
console.log(iik);
naama = 1;
}
else{

 $( ".tieto" ).text(";-)"); 
 iik++; 
 console.log(iik);  
 naama = 1;
}
 }	
 
  if (iik > 9){
	 $( ".tieto" ).text("x("); 
	 	 
	 showPopup("Stop hitting me!");
	 updateLog("Stop hitting me!");
	 
	 iik = 0; 
	 aak++;
	 console.log("super points: " + aak ); 
	 }
	 
	 
	 // TÄHTI TIPPUUU
	 if (aak === 5)
	 {
		console.log("Calm the fuck down! :O");  
		aak = 0;
		clickCounter = 1;
		$( ".tieto" ).text(":O"); 
		tahti++;
		$( ".starpoints" ).text(tahti); 
		console.log("tahtipointseja:" +tahti);
		updateLog("IT'S A STAR!");
		
		showPopup("Oh noes i lost my star!");

		$('.stuff').css({ 'font-size': 60 });
		$( ".stuff" ).text( "*"); 
		$('.stuff').delay(1).fadeIn(300).delay(550).fadeOut(100);
		document.getElementById("stuff").style.webkitAnimationName = "liikutaalas";
		
		document.getElementById("tietoa").style.webkitAnimationName = "shake";
	 }
	 if (tahti > 0)
	 {
		UpdateStarPoints();
	 }
	
	updateAllaKompisar();
}
//---------------------------------------------------------------------------------------------

// Päivitetään alanurkkaan uudet tähtipisteet
function UpdateStarPoints()
{
	$( ".starpoints" ).text("*:"+tahti.toFixed(2)); 
	updateAllaKompisar();
}


// klikkaukset testi          

function klikitsekunnissa() {
    sekunnit = setInterval(alertFunc, 1000);
}

function alertFunc() {
	
	$.fn.multiline = function(text){
    this.text(text);
    this.html(this.html().replace(/\n/g,'<br/>'));
    return this;
}
	
   // console.log("klikkejä sekunnissa: " + clicksSekunnissa / 1)
   	$('.stats_bar_cps').multiline("CPS:\n" +clicksSekunnissa);
    clicksSekunnissa = 0;
}
// paskatesti päättyy



// UPDATE FUNKTIO JOKA PÄIVITTÄÄ KAIKKI TEKSTIT

// WIP
function updateAllaKompisar() {
	
	$.fn.multiline = function(text){
    this.text(text);
    this.html(this.html().replace(/\n/g,'<br/>'));
    return this;
}
	
	// updatetetaan stats barin statsit
	$('.stats_bar_clicks').multiline("Clicks:\n"+ +clicks);
	$('.stats_bar_cps').multiline("CPS:\n"+ +clicksSekunnissa);
	$( ".stats_bar_stars" ).multiline("*:\n"+tahti.toFixed(2)); 
	
	
	
	// kun tahtia on enemman kun slaven hinta
	if (linkinID == 2) 
	{
	if (tahti >= slave.price)
	{
		$('#purchase_button').attr("disabled", false);
	}
	}
	
	if (linkinID == 3) 
	{
	if (tahti >= mutantPrice)
	{
		$('#purchase_button').attr("disabled", false);
	}
	}
	
}


function addStatsBar() {
	$('.stats_bar').show();
	updateAllaKompisar()
}

var closeupdates_link = document.getElementById("close_update_info");

 closeupdates_link.onclick = function() {
	 $('.update_info').hide();
	 $('.update_info').delay(1).fadeOut(300);
	 
	 // muutetaan invibarissa olevien asioiden värit
	 
	 $(".update1").css("background-color", "#0C9");
	 return false;
 }