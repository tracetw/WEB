function doFirst(){
	document.getElementById('theForm').onsubmit = calculator;
	//alert('hi');
	//var theForm = document.getElementById('theForm');
	//document.getElementById('theForm').addEventListener('submit',calculator,false); 
}
function calculator(){
	var quantity = document.getElementById('quantity').value;
	var price = document.getElementById('price').value;
	var tax = document.getElementById('tax').value;
	var discount = document.getElementById('discount').value;
	var total;
	//alert(total);
	total = quantity * price;
	tax = tax/100;	/* tax /= 100; */
	tax++;
	total = total * tax;	/* total *= tax; */
	total = total - discount;	/* total -= discount;	 */
	
	total = total.toFixed(2);
	document.getElementById('total').value = total;
	
	return false;
}
window.addEventListener('load',doFirst,false);