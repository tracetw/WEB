function doFirst(){
	var x =document.getElementById("canvas");
	var canvas = x.getContext("2d");
	// canvas.fillRect(50,50,200,250);
	// canvas.clearRect(100,100,50,50);
	// canvas.rect(50,50,200,250);
	// canvas.fill();


	// canvas.moveTo(50, 50);
	// canvas.lineTo(100,150);
	// canvas.lineTo(150,200);

	// canvas.stroke();

	// canvas.strokeStyle = grd; 
	// canvas.font = "80px Arial";
	// canvas.fillText("hello",50,50);


	// var pic = new images();
	// pic.src = "../images/washDrawing/010.JPG";
	// pic.addEventListener('load',function(){
	// 	canvas.drawImage(pic,0,0,x.width,x.height);
	// },false)
	canvas.beginPath();
	canvas.arc(200,200,100,3/2*Math.PI,2*Math.PI,true);
	canvas.stroke();
	canvas.beginPath();
	canvas.arc(300,200,100,3/2*Math.PI,2*Math.PI,false);
	canvas.stroke();
	canvas.beginPath();
	canvas.arc(200,500,100,1/2*Math.PI,2*Math.PI,true);
	canvas.stroke();
}


window.addEventListener('load',doFirst,false);