/*  filter.js : JavaScript to select gift recommendation criteria
    INST630 Group Project
    Team: Karishma Ghiya - kghiya93@umd.edu
          Anushka Kher   - akher@umd.edu
          Pujita Tipnis  - ptipnis@umd.edu
*/

// this is an object constructor.
function storeInObjConstructor(gender, minAge, maxAge, country, state, minCost, maxCost, delivDate, occasion, relationship) {
	this.gender = gender;
	this.minAge = minAge;
	this.maxAge = maxAge;
	this.country = country;
	this.state = state;
	this.minCost = minCost;
	this.maxCost = maxCost;
	this.delivDate = delivDate;
	this.occasion = occasion;
	this.relationship = relationship;
};

function getValues() {

	var gender;
	var minAge;
	var maxAge;
	var country;
	var state;
	var minCost;
	var maxCost;
	var delivDate;
	var occasion;
	var relationship;
	var filterVals;
	var checkFlag=false;

	// it checks whether gender has been selected, else alerts user to enter the gender 
	if(document.getElementById("radioF").checked == true)
		gender = "F";
	else if(document.getElementById("radioM").checked == true)
		gender = "M";
	else {
		alert("You need to mention gender");
		checkFlag = true;
	}
	//alert(gender);

	// it checks the minimum age and maximum age and according selects the age range pre-defined by us.
	minAge = $( "#slider-range1" ).slider( "values", 0 );
	maxAge = $( "#slider-range1" ).slider( "values", 1 );
	//alert("old min age="+minAge);
	//alert("old max age="+maxAge);

	if(minAge<2) {
		minAge = 0;
	}

	if(minAge===3) {
		minAge = 2;
	} 

	else if(minAge>=4 && minAge<=11) {
		minAge = 4;
	}
	else if(minAge>=12 && minAge<=15) {
		minAge = 12;
	}
	else if(minAge>=16 && minAge<=20) {
		minAge = 16;
	}
	else if(minAge>=21) {
		minAge = 21;
	}

	if(maxAge<2) {
		maxAge =1;
	}
	else if(maxAge===2) {
		maxAge = 3;
	}
	else if(maxAge>=4 && maxAge<=11) {
		maxAge = 11;
	}
	else if(maxAge>=12 && maxAge<=15) {
		maxAge=15;
	}
	else if(maxAge>=16 && maxAge<=20) {
		maxAge = 20;
	}
	else if(maxAge>=21) {
		maxAge = 100;
	}

	//alert("new min age="+minAge);
	//alert("new max age="+maxAge);


	country = document.getElementById("country").value;
	state = document.getElementById("state").value;
	//alert(country);
	//alert(state);

	minCost = $( "#slider-range" ).slider( "values", 0);
	maxCost = $( "#slider-range" ).slider( "values", 1);
	//alert(minCost);
	//alert(maxCost);

	delivDate = document.getElementById("deliveryDate").value;
	//alert(delivDate);

	occasion = document.getElementById("occ").value;
	//alert(occasion);
	if(occasion === "") {
		checkFlag = true;
		alert("You need to choose an occasion");
	}

	relationship = document.getElementById("relation").value;	
	//alert(relationship);

	if(checkFlag === false) {
	filterVals = new storeInObjConstructor(gender, minAge, maxAge, country, state, minCost, maxCost, delivDate, occasion, relationship);

	if(localStorage.getItem(localStorage.key(0))===null) {
			localStorage.setItem('filterValsLS',JSON.stringify(filterVals));
	}

	else {
		var filterValsPrev = localStorage.getItem(localStorage.key(0));
		localStorage.setItem('filterValsLS',filterValsPrev+ "|" +JSON.stringify(filterVals));
	}

	window.location.assign("showRecommendation.html");
 }
			
}



window.onload = function() {
	document.getElementById("submit").onclick = getValues;
}