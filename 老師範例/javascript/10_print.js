function doFirst(){
	
	if(typeof window.print == 'function'){
		var printButton = document.createElement('button');
		printButton.textContent = 'Print this page';
	}
	printButton.addEventListener('click',function(){
		window.print();
	},false);
	document.body.insertBefore(printButton,document.getElementById('main_section'));
}
window.addEventListener('load',doFirst,false);





