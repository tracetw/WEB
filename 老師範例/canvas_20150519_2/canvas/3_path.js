function doFirst(){
	var x = document.getElementById('canvas');
	var canvas = x.getContext('2d');
	
	canvas.moveTo(50,50);
	canvas.lineTo(100,150);
	canvas.lineTo(300,100);
	canvas.lineTo(250,200);
	canvas.closePath();
	
	canvas.stroke();
}
window.addEventListener('load',doFirst,false);