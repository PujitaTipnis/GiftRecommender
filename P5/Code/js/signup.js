/*  signup.js : JavaScript to get a user to sign up to the Gift Recommender website services
    INST630 Group Project
    Team: Karishma Ghiya - kghiya93@umd.edu
          Anushka Kher   - akher@umd.edu
          Pujita Tipnis  - ptipnis@umd.edu
*/

function validateq() {

	// Declaring variables 

	var pwdFlag= false;
	var lenFlag= false;
	var firstu;
	var firstp;

	// Fetch the username and passwords entered by the user

	var un = document.getElementById("username").value;
	var pd = document.getElementById("password1").value;
	var cpd = document.getElementById("password2").value;

	// Check if the two passwords, entered by the user, match

	if (pd != cpd) {
		pwdFlag = true;
		alert("Password does not match!");
	}

	// Validate the username field. Alert the user if the field is empty
	if (un.length <= 0) {
		lenFlag = true;
		alert("Username cannot be empty!");
	}

	// Validate the password1 field. Alert the user if the field is empty

	if (pd.length <= 0) {
		lenFlag = true;
		alert("Password cannot be empty!");
	}

	// Validate the password2 field. Alert the user if the field is empty

	if (cpd.length <= 0) {
		lenFlag = true;
		alert("Confirm password!");
	}

	// If no errors, add the username and password to the localstorage

	if ((pwdFlag === false) && (lenFlag === false)) {

		// If the username and password localstorage is empty, then add to localstorage

		if ((localStorage.getItem(localStorage.key(0)) === null) && (localStorage.getItem(localStorage.key(1)) === null)) {
			localStorage.setItem('username',un);
			localStorage.setItem('password',pd);
		}

		// Else, append to the existing values, separated by space

		else {
			firstu = localStorage.getItem(localStorage.key(1));
			firstp = localStorage.getItem(localStorage.key(0));
			localStorage.setItem('username',firstu+" "+un);
			localStorage.setItem('password',firstp+" "+pd);
		}

		//alert(localStorage.length);
		
		// Re-direct to the login page
		window.location.assign("login.html");
	}
}

function init() {

	//localStorage.clear();
	document.getElementById("submit").onclick = validateq;
}

window.onload = init;