function doFirst(){
	var x = document.getElementById('canvas');
	var canvas = x.getContext('2d');
	
	canvas.shadowOffsetX = 5;
	canvas.shadowOffsetY = 5;
	canvas.shadowColor = 'rgba(255,0,0,0.5)';
	canvas.shadowBlur = 7;

	
	canvas.strokeStyle = 'red';
	canvas.fillStyle = 'blue';
	canvas.font = 'bold 40px Comic Sans MS';
	
	//canvas.strokeText('omgSilvia!',200,200);
	canvas.fillText('omgSilvia!',200,200);
	
	/* canvas.moveTo(200,200);
	canvas.lineTo(387,200);
	canvas.stroke(); */
	
}
window.addEventListener('load',doFirst,false);