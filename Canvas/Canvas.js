function doFirst(){
	var x =document.getElementById("canvas");
	var canvas = x.getContext("2d");
	// canvas.fillRect(50,50,200,250);
	// canvas.clearRect(100,100,50,50);
	canvas.rect(50,50,200,250);
	canvas.fill();
}


window.addEventListener('load',doFirst,false);