function doFirst(){
	var loginForm = document.getElementById('theForm'); 
	
//	loginForm.onsubmit = validate;
	loginForm.addEventListener('submit',validate,false);	
}
function validate(){
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	
	if(email.length>0 && password.length>0){
		return true;
	}else{
		alert('Please complete the form!');
		return false;
	}
}
window.addEventListener('load',doFirst,false);