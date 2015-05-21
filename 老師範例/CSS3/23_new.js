window.onload = doFirst;
function doFirst(){
	image = document.getElementById('image');
	playButton = document.getElementById('playButton');
	pauseButton = document.getElementById('pauseButton');
	
	playButton.onclick = onRunning;
	pauseButton.onclick = onPause;
}
function onRunning(){
	image.style.WebkitAnimationPlayState='running';
}
function onPause(){
	image.style.WebkitAnimationPlayState='paused';
}