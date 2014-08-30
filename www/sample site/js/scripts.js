// JavaScript Document

function dissable_submition(isAgree){
	if(isAgree==1){
		document.getElementById("btn_submit").disabled="";
	}else{
		document.getElementById("btn_submit").disabled="disabled";
	}	
	
	
}

function validate_payment_form(form){
	if(form.invoice_no.value==''){
		alert("Please Invoice Number");
		form.invoice_no.focus();
		return false;
	}		
	if(form.amount.value=='' || isNaN(Number(form.amount.value))){
		alert("Please Enter The US$ Amount");
		form.amount.focus();
		return false;
	}		
	
	return true;
}

function show_hide_child_ages(no_of_children){
	var child_agex = document.getElementById('child_age');
	if(no_of_children==0){
		child_agex.style.display = 'none';
	}
	else
	{
		child_agex.style.display = '';	
	}
}

function validate_reservation_form(form){
	if(form.hotel_id.value==''){
		alert("Please select a hotel");
		form.hotel_id.focus();
		return false;
	}	
	if(form.in_month.value==''){
		alert("Please select check-in month");
		form.in_month.focus();
		return false;
	}	
	if(form.in_date.value==''){
		alert("Please select check-in day");
		form.in_date.focus();
		return false;
	}	
	if(form.in_year.value==''){
		alert("Please select check-in year");
		form.in_year.focus();
		return false;
	}	
	if(form.out_month.value==''){
		alert("Please select check-out month");
		form.out_month.focus();
		return false;
	}	
	if(form.out_date.value==''){
		alert("Please select check-out day");
		form.out_date.focus();
		return false;
	}	
	if(form.out_year.value==''){
		alert("Please select check-out year");
		form.out_year.focus();
		return false;
	}		
-1
	if(form.room_type.value=='-1'){
		alert("Please select room type");
		form.room_type.focus();
		return false;
	}	

	if(form.rooms.value==''){
		alert("Please select number of rooms you  need");
		form.rooms.focus();
		return false;
	}	
	if(form.adults.value==''){
		alert("Please select number of adults");
		form.adults.focus();
		return false;
	}		
	if(form.children.value==''){
		alert("Please select number of children");
		form.children.focus();
		return false;
	}			
	if(form.first_name.value==''){
		alert("Please enter your first name");
		form.first_name.focus();
		return false;
	}				
	if(form.last_name.value==''){
		alert("Please enter your last name");
		form.last_name.focus();
		return false;
	}
//
// email validation here
//
	if (form.email_1.value.indexOf("@") <= 0 || form.email_1.value.indexOf(".") <= 0 ){
		alert("The format of the \"e-mail\" address is incorrect. Please enter in the format 'john@aol.com'");
		form.email_1.focus();
		return(false);
	}
	if (form.email_2.value.indexOf("@") <= 0 || form.email_2.value.indexOf(".") <= 0 ){
		alert("The format of the \"e-mail\" address is incorrect. Please enter in the format 'john@aol.com'");
		form.email_2.focus();
		return(false);
	}

	if(form.email_2.value != form.email_1.value){
		alert("Email address does no match with confirmed email address");
		form.email_2.focus();
		return false;
	}


	if(form.last_name.value==''){
		alert("Please enter your last name");
		form.last_name.focus();
		return false;
	}
	if(form.address.value==''){
		alert("Please enter address");
		form.address.focus();
		return false;
	}
	if(form.city.value==''){
		alert("Please enter city");
		form.city.focus();
		return false;
	}
	if(form.state.value==''){
		alert("Please enter state");
		form.state.focus();
		return false;
	}
	if(form.postal_code.value==''){
		alert("Please enter postal code");
		form.postal_code.focus();
		return false;
	}	
	if(form.country_iso_2.value==''){
		alert("Please select country");
		form.country_iso_2.focus();
		return false;
	}		
	if(form.telephone.value==''){
		alert("Please enter telephone");
		form.telephone.focus();
		return false;
	}			
	if(form.message.value==''){
		alert("Please enter you message");
		form.message.focus();
		return false;
	}	
		
	validation_code = String(form.validation_code.value);
	if(isNaN(parseInt(form.validation_code.value)) || validation_code.length <4){
		alert("Please enter validation code as shown on screen");
		form.validation_code.focus();
		return false;	
	}
	
	form.btn_submit.disabled = "disabled";
	return(true);	
}


function validate_contact_form(form){
	if(form.name.value==''){
		alert("Please enter your name");
		form.name.focus();
		return false;
	}
	
	if(form.subject.value==''){
		alert("Please enter subject");
		form.subject.focus();
		return false;
	}
	
	if (form.email.value.indexOf("@") <= 0 || form.email.value.indexOf(".") <= 0 ){
		alert("The format of the \"e-mail\" address is incorrect. Please enter in the format 'john@aol.com'");
		form.email.focus();
		return(false);
	}
	
	if(form.iso_2.value==''){
		alert("Please Select country");
		form.iso_2.focus();
		return false;
	}
	
	if(form.message.value==''){
		alert("Please enter your message");
		form.message.focus();
		return false;
	}	
	
	validation_code = String(form.validation_code.value);
	if(isNaN(parseInt(form.validation_code.value)) || validation_code.length <4){
		alert("Please enter validation code as shown on screen");
		form.validation_code.focus();
		return false;	
	}		
	
	form.btn_submit.disabled = "disabled";
	return true;
}