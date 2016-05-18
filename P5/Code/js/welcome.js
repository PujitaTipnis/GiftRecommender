/*  welcome.js : JavaScript to get a user to sign up to the Gift Recommender website services
    INST630 Group Project
    Team: Karishma Ghiya - kghiya93@umd.edu
          Anushka Kher   - akher@umd.edu
          Pujita Tipnis  - ptipnis@umd.edu
*/
function nextPage() {

		window.location.assign("login.html");
}

function init() {

	localStorage.clear();
	document.getElementById("next").onclick = nextPage;
}

window.onload = init;