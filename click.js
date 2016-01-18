//click.js

$("#canvas_center").click(function(e){
CLICK();

 });



function CLICK () 
{
clicks++;
superpoints++;

howmany = "1";

push();

	if (changeSmiley == false)
	{
	hymio = ":-)";
	console.log(clicks);

	changeSmiley = true;
	}else{

	hymio = ":-(";
	changeSmiley = false;
	console.log(clicks);
	}

}