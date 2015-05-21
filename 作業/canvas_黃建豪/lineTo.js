function doFirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');

	canvas.beginPath();
for (var i = 1, j=1; i < 10; i++, j+=2) {
	canvas.arc(300,300,200,j/8*Math.PI,j/8*Math.PI,false);
	canvas.arc(300,300,60,i/4*Math.PI,i/4*Math.PI,false);
}
	canvas.stroke();

}
window.addEventListener('load',doFirst,false);