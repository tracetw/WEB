function doFirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
//喜
	canvas.beginPath();
	canvas.arc(200,200,130,0,2*Math.PI,false);
	canvas.stroke();
	canvas.beginPath();
	canvas.arc(160,170,30,0,2*Math.PI,false);
	canvas.stroke();
	canvas.beginPath();
	canvas.arc(240,170,30,0,2*Math.PI,false);
	canvas.stroke();
	canvas.beginPath();
	canvas.arc(200,250,30,1/5*Math.PI,4/5*Math.PI,false);
	canvas.stroke();

//怒
	canvas.beginPath();
	canvas.arc(500,200,130,0,2*Math.PI,false);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(440,155);
	canvas.lineTo(480,170);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(440,190);
	canvas.lineTo(480,180);
	canvas.stroke();

	canvas.moveTo(560,155);
	canvas.lineTo(520,170);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(560,190);
	canvas.lineTo(520,180);
	canvas.stroke();

	canvas.beginPath();
	canvas.arc(480,270,20,1.1*Math.PI,0,false);
	canvas.stroke();
	canvas.beginPath();
	canvas.arc(520,270,20,0.1*Math.PI,1*Math.PI,false);
	canvas.stroke();
//哀
	canvas.beginPath();
	canvas.arc(200,500,130,0,2*Math.PI,false);
	canvas.stroke();
	canvas.beginPath();
	canvas.arc(160,470,30,0,2*Math.PI,false);
	canvas.stroke();
	canvas.beginPath();
	canvas.arc(240,470,30,0,2*Math.PI,false);
	canvas.stroke();
	canvas.beginPath();
	canvas.arc(200,580,30,1.2*Math.PI,1.8*Math.PI,false);
	canvas.stroke();

//樂
	canvas.beginPath();
	canvas.arc(500,500,130,0,2*Math.PI,false);
	canvas.stroke();
	canvas.beginPath();
	canvas.arc(460,470,30,0,2*Math.PI,false);
	canvas.stroke();
	canvas.beginPath();
	canvas.arc(540,470,30,0,2*Math.PI,false);
	canvas.stroke();
	canvas.beginPath();
	canvas.arc(500,560,30,1/10*Math.PI,9/10*Math.PI,false);
	canvas.arc(500,560,30,1/10*Math.PI,1/10*Math.PI,false);
	canvas.stroke();
}

//三點定一圓

window.addEventListener('load',doFirst,false);