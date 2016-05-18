/*  login.js : JavaScript to get a user to log in to the Gift Recommender website
    INST630 Group Project
    Team: Karishma Ghiya - kghiya93@umd.edu
          Anushka Kher   - akher@umd.edu
          Pujita Tipnis  - ptipnis@umd.edu
*/

function validate() {

	// Declaraing variables

	var flag = false;
	var lenFlag=false;

	// Fetch the username and password entered by the user

	var check_uname = document.getElementById("username").value;
	var check_pwd = document.getElementById("password").value;

	// Validate the username field. Alert the user if the field is empty

	if (check_uname.length <= 0) {
		lenFlag = true;
		alert("Username cannot be empty!");
	}

	// Validate the password1 field. Alert the user if the field is empty

	if (check_pwd.length <= 0) {
		lenFlag = true;
		alert("Password cannot be empty!");
	}

	// If there are no errors, check if the username and password are stored on localstorage.
	// If yes, then re-direct the user to the first page of the website

	if (lenFlag === false) {

		if(localStorage.length === 0) {

			if(flag === false) {
				alert("Not in database. Please signup.");
			}

		} else {
			var uname = localStorage.getItem(localStorage.key(1));
			var pwd = localStorage.getItem(localStorage.key(0));

			var unameArr = uname.split(" ");
			var pwdArr = pwd.split(" ");

			for(var i=0;i<unameArr.length;i++) {
				if(unameArr[i]===check_uname) {
					if(pwdArr[i] === check_pwd) {
						window.location.assign("filter.html");
						flag = true;
					}
				}
			}

			if(flag === false) {
				alert("Not in database");
			}
		}
	}
}

function signupnav() {
	window.location.assign("signup.html")
}

function init() {
	document.getElementById("login").onclick = validate;
	document.getElementById("signup").onclick = signupnav;
}

window.onload = init;