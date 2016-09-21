//passwordValidator takes in passwords from html page and determines if they match

function validate(){

	var password = document.getElementById("password").value;
	var confpass = document.getElementById("confpass").value;

	if(password==confpass && password.length>=8){
		alert("Passwords Validated!");
	}
	else if(password.length<8){
		alert("Password must be 8 characters long!");
	}
	else {
		alert("Passwords don't match! Not validated!");
	}
}
