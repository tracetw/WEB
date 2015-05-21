function doFirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	
	x.addEventListener('mousemove', usePen, false);	
}
function usePen(e){
	canvas.strokeRect(e.pageX,e.pageY,10,10);	
}
window.addEventListener('load',doFirst,false);