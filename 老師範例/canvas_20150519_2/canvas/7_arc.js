function doFirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	
	canvas.lineWidth = 5;
	canvas.strokeStyle = 'red';
	canvas.fillStyle = 'pink';
	
	canvas.arc(200,200,100,0,3/2*Math.PI,false);
	canvas.stroke();
	
	canvas.beginPath();
	canvas.arc(500,200,100,Math.PI,2*Math.PI,false);
	canvas.stroke();
	
	canvas.beginPath();
	canvas.arc(200,500,100,3/4*Math.PI,2*Math.PI,true);
	canvas.stroke();
	
	canvas.beginPath();
	canvas.arc(500,500,100,0,2*Math.PI,false);
	canvas.stroke();
	canvas.fill();
	
	canvas.beginPath();
	canvas.moveTo(500,500);
	canvas.lineTo(500,410);
	canvas.stroke();
	
	canvas.beginPath();
	canvas.moveTo(500,500);
	canvas.lineTo(565,500);
	canvas.stroke();
}
window.addEventListener('load',doFirst,false);