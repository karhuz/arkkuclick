//click.js

$("#canvas_center").click(function(e){
clicks++;

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

 });