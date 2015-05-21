function goCnt(){
	quantity = document.getElementById('quantity').value;	//全域變數
	price = document.getElementById('price').value;
	discount = document.getElementById('discount').value;
	total = quantity*price*(100-discount)/100;
	total = total.toFixed(2);//固定小數點後兩位
	document.getElementById('total').value = total;
}


function doFirst(){
	var loginForm = document.getElementById('theForm'); 
	loginForm.onsubmit = validate;
	//loginForm.addEventListener('submit',validate,false);	
	//用這樣寫提交會重新載入啊F

}


function validate(){
	// var quantity = document.getElementById('quantity').value;
	// var price = document.getElementById('price').value;
	// var discount = document.getElementById('discount').value;
	// var total = parseInt(quantity*price*(100-discount)/100);
	alert('Total $'+total);
	return true;
}


//Math.round();



window.addEventListener('load',doFirst,false);