/* LAB 7 - SHIPPING FORM */
// wait for document to load
window.onload = domReady;

// execute after form is loaded
 function domReady() {
	// Get the form element
	var formHandle = document.forms.form_ship;
	
	// listen for form submission
	formHandle.onsubmit = processForm;

	function processForm() {
		// variable declarations
		var inputName = formHandle.f_Name;
		var inputID = formHandle.f_Id;
		var inputPostalCode = formHandle.f_pc;
		var thanksCustomer = document.getElementById('thanksCustomer');
		var thanksPostalCode = document.getElementById('thanksPC');
		var thankYouMessage = document.getElementById('thanks_msg');


		// validation for empty strings
		if(inputName.value == '') {
			inputName.style.backgroundColor = 'red';
			inputName.focus();
			return false;
		}

		if(inputID.value == '') {
			inputID.style.backgroundColor = 'red';
			inputID.focus();
			return false;
		}

		if(inputPostalCode.value == '') {
			inputPostalCode.style.backgroundColor = 'red';
			inputPostalCode.focus();
			return false;
		}

		// hide form
		formHandle.style.display = 'none';

		// dynamically change content of elements
		thanksCustomer.innerHTML = inputName.value + " (Customer # " + inputID.value + " )";
		thanksPostalCode.innerHTML = inputPostalCode.value;

		// show thank you message
		thankYouMessage.style.display = 'block';
		return false;
	}
	
 }
//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
var shipInfo = {
	cid: 0,
	name: "",
	pc: "",
	speed: "",
	cost: 0
};



