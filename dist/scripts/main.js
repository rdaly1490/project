// $(document).ready(function() {

$("#contact-form").on("submit", function(e) {
	var $name = $("#name");
	var $email = $("#email");
	var $message = $("#message");

	joinedName = ($name.val().replace(/\s+/g, ''));
	var names = validator.isAlpha(joinedName);
	var namesNull = validator.isNull($name.val());
	var emails = validator.isEmail($email.val());
	var emailsNull = validator.isNull($email.val());
	var messageArea = validator.isNull($message.val());
	// console.log("names", names);
	// console.log("namesNull", namesNull);
	// console.log("emails", emails);
	// console.log("emailsNull", emailsNull);
	// console.log("messageArea", messageArea);

	if (names && emails && webContain && !txt) {
		console.log("good");	
	}
	if (namesNull) {
		e.preventDefault();
		$("#invalid-name").html("Field cannot be left blank");
	}	
	else if (!names) {
		e.preventDefault();
		$("#invalid-name").html("Name must contain letters only");
	}
	else {
		e.preventDefault();
		$("#invalid-name").html("");
	}
	if (emailsNull) {
		e.preventDefault();
		$("#invalid-email").html("Field cannot be left blank");
	}
	else if (!emails) {
		e.preventDefault();
		$("#invalid-email").html("Email must contain @ symbol and be valid");
	}
	else {
		e.preventDefault();
		$("#invalid-email").html("");
	}
	if (messageArea) {
		e.preventDefault();
		$("#invalid-msg").html("Field cannot be left blank");
	}
	else {
		e.preventDefault();
		$("#invalid-msg").html("");
	}	


});



// });