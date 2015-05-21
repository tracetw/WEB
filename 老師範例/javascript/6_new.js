var r,x,y;
function doFirst(){

	fname = document.getElementById('fname');
	lname = document.getElementById('lname');
	name = document.getElementById('name');
//	test = document.getElementById('test');
	document.getElementById('test').onclick = second;
}
function second(){
	alert(fname.value);				
}
function third(){
	alert();
}
window.addEventListener('load',doFirst,false);


document.getElementById('theForm').addEventListener('reset',function(){
	return confirm('Are you sure you want to reset the form?');	
},false);
