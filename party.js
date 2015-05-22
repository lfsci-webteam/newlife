randomColor()
{
	var r = Math.floor( Math.random() * (255+1) );
	var g = Math.floor( Math.random() * (255+1) );
	var b = Math.floor( Math.random() * (255+1) );
	
	var rgb = r  "," + g + "," + b;

	return rgb
}


var startBtn = document.getElementsByClassName("startBtn");
	startBtn.style.background = "rgb(" + randomColor() + ")"