var onkologi = 1;

element.addEventListener('webkitAnimationEnd', function(){
    this.style.webkitAnimationName = '';
}, false);

function showLog(id) { 

if (onkologi == 1)
{
$('.logi').delay(1).fadeIn(300);
document.getElementById("logi").style.webkitAnimationName = "moveconsole";
$('#logbutton').hide();
onkologi = 0;
console.log("näytetään logi.. " +onkologi);
}else{
$('.logi').hide();
onkologi = 1;
	console.log("piilotetaan logi.. " +onkologi);
}
}


var closelogi_link = document.getElementById("close_logi");

 closelogi_link.onclick = function() {
	 console.log("closing logi");
	 $('.logi').hide();
	 $('.logi').delay(1).fadeOut(300);
	 $('#logbutton').delay(1).fadeIn(300);
	 onkologi = 1;
	 return false;
 }
 
 $(function() {
   $( ".logi" ).draggable();
  });