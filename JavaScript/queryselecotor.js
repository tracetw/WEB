windows.onload = function(){
	var list = document.querySelectorAll("p");
	for (var i = 0; i < list.length; i++) {
		list[i].onclick = talk();
	}
}
function talk(){
	alert('hi')	;
}