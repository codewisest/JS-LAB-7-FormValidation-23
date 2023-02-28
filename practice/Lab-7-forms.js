/* LAB 7 - SHIPPING FORM */

window.onload = domReady;

function domReady() {
	var nameError = document.getElementById('nameError');
	var idError = document.getElementById('idError');
	var postalCodeError = document.getElementById('postalCodeError');

	var formHandle = document.forms.form_ship;
	// console.log(formHandle);

	formHandle.onsubmit = processForm;
	
	function processForm(){
		alert('form data sent to server');
		var inputName = formHandle.in_Name;
		var inputID = formHandle.in_Id;
		var inputPostalCode = formHandle.in_pc;
		
		// Validation

		// name input
		// if(inputName.value == '') {

		// }

		console.log(inputName.value, inputID.value, inputPostalCode.value);
		formHandle.reset();
		// formHandle.style.display = 'none';
		return false;
	}
	//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
var shipInfo = {
	cid: 0,
	name: "",
	pc: "",
	speed: "",
	cost: 0
};

}




