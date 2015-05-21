function doFirst(){
	document.getElementById('theForm').onsubmit = setEvent; 
}
function setEvent(){
	var events = ['mousedown','click','keypress','contextmenu','mouseover'];
	
	for(var i=0; i < events.length; i++){
		var checkbox = document.getElementById(events[i]);
		
		if(checkbox.checked){
			document.addEventListener(events[i],report,false);
		}else{
			document.removeEventListener(events[i],report,false);
		}
	}
	document.getElementById('output').value = '';
	return false;
}
function report(e){
	var message = e.target.nodeName + ':' + e.type + '\n';
	document.getElementById('output').value += message;
}
window.addEventListener('load',doFirst,false);





