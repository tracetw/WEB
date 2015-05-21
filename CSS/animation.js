window.onload = doFrist;
function doFrist(){
	image = document.getElementById('image');
	start = document.getElementById('start');
	stop = document.getElementById('stop');

	start.onclick = onRunning;
	stop.onclick = onPause;
}
function onRunning(){
	image.style.WebkitAnimationPlayState = 'running';
}
function onPause(){
	image.style.WebkitAnimationPlayState = 'paused';
}