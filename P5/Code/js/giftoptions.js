/*  giftoptions.js : JavaScript to provide gift category options based on input provided in the filter screen
    INST630 Group Project - P3
    Date: 05/01/2016
    Team: Karishma Ghiya - kghiya93@umd.edu
          Anushka Kher   - akher@umd.edu
          Pujita Tipnis  - ptipnis@umd.edu
*/

var btnClicked;

var items = [];

// HTML code to display images for button hrefs

var buttonPart1 = "<button type='button' class='itemBtn' id='";

var buttonPart2 =  "' onClick='buttonAnimate(this.id)'><svg height='200' width='200'> <defs>" +
		"<pattern id='image' x='0' y='0' patternUnits='userSpaceOnUse' height='100%' width='100%'>" +
		"<rect height='100%' width='100%' fill='#fff' />" +
	  	"<image x='75' y='75' xlink:href='images/";

var buttonPart3 = ".png' width='25%' height='25%'></image>" + 
		"</pattern></defs><circle cx='100' cy='100' r='40' stroke='grey' stroke-width='3' fill='url(#image)'/></svg></button>";

// Function to display the button images based on the categories to be recommended

function displayButtons(items) {

	var cnt = 0;

	// Display 3 buttons per line

	for(var i = 0; i < items.length; i++) {

		if (i < ((cnt + 1) * 3)) {

			document.getElementById("signupsection").innerHTML += buttonPart1 + i + buttonPart2 +  items[i] + buttonPart3;

		} else {

			document.getElementById("signupsection").innerHTML += "<br />" + buttonPart1 + i + buttonPart2 +  items[i] + buttonPart3;
			cnt++;
		}
	}
}


// Function to validate the data passed from filter.html and recommend categories accordingly.
// Fields that help determine categories to be recommended are 'Age', 'Occasion' and 'Gender'

function buttonAnimate(buttonID) {

	//alert("hello " + buttonID);

	for (var i = 0; i < items.length; i++) {

		if(i === Number(buttonID)) {

    		if(localStorage.getItem("xSelectedItem") === null) {
    			localStorage.setItem("xSelectedItem", items[i]);

    		} else {
    			localStorage.setItem("xSelectedItem", "|" + items[i]);
    		}

			if ((items[i] === "greeting") || (items[i] === "stroller") || (items[i] === "chocolates") || (items[i] === "bouquet") || (items[i] === "giftcards") || (items[i] === "collectible") ) {
				window.location.assign("resultsTry.html");
			} else {
				$("#" +buttonID).animate({right: '500px', width: '+=250px', height: '+=300px'}, "slow");
			}
    		//alert("xselected " + localStorage.getItem("xSelectedItem"));
    		setTimeout(sleepFunction, 700);
    		//document.getElementById(buttonID).id = "cn-button";
    		//$(".container").show();
		} else {
			$("#" +i).hide();
		}
	}

	//window.location.assign("file:///Users/pujitatipnis/Documents/MIM/Spring2016/INST630/CircularNavigation/index2.html");  
}

function sleepFunction() {

	window.location.assign("index2.html");  

}

function init() {

	//$(".container").hide();

	// Access the last object added to the local storage

	//var prevObj = localStorage.getItem(localStorage.key(0));

  	var filterVals = localStorage.getItem("filterValsLS");

	var filterValSplit = filterVals.split("|");

	var currFilterVal = JSON.parse(filterValSplit[filterValSplit.length - 1]);

	// Recommendation for age categories from 0 to 1 year

	if(currFilterVal["minAge"] === 0 && currFilterVal["maxAge"] === 1) {

		items = ['clothes','books','greeting','food','stroller','toys'];

		// Birthday recommendations based on gender

		if(currFilterVal["occasion"].toLowerCase() === "birthday") {

			if(currFilterVal["gender"] === "F") {
				document.getElementById("customtitle").innerHTML = "Birthday Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Birthday Gift options for Him";
				displayButtons(items);
			}

		// Christmas recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "christmas") {

			if(currFilterVal["gender"] === "F") {
				document.getElementById("customtitle").innerHTML = "Christmas Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Christmas Gift options for Him";
				displayButtons(items);
			}

		// Diwali recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "diwali") {

			if(currFilterVal["gender"] === "F") {
				document.getElementById("customtitle").innerHTML = "Diwali Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Diwali Gift options for Him";
				displayButtons(items);
			}

		} else {
			document.getElementById("customtitle").innerHTML = "Invalid Options";
			document.getElementById("text").innerHTML = "Oops ! You seem to have selected a wrong combination of options.";
			document.getElementById("text").innerHTML += "<br /> Please try again.";
		}

	// Recommendation for age categories from 2 to 3 years

	} else if (currFilterVal["minAge"] === 2 && currFilterVal["maxAge"] === 3) {

		items = ['clothes','books','greeting','food','stroller','chocolates','toys'];

		// Birthday recommendations based on gender

		if(currFilterVal["occasion"].toLowerCase() === "birthday") {

			if(currFilterVal["gender"] === "F") {
				document.getElementById("customtitle").innerHTML = "Birthday Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Birthday Gift options for Him";
				displayButtons(items);
			}

		// Christmas recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "christmas") {

			if(currFilterVal["gender"] === "F") {
				document.getElementById("customtitle").innerHTML = "Christmas Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Christmas Gift options for Him";
				displayButtons(items);
			}

		// Diwali recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "diwali") {

			if(currFilterVal["gender"] === "F") {
				document.getElementById("customtitle").innerHTML = "Diwali Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Diwali Gift options for Him";
				displayButtons(items);
			}

		} else {
			document.getElementById("customtitle").innerHTML = "Invalid Options";
			document.getElementById("text").innerHTML = "Oops ! You seem to have selected a wrong combination of options.";
			document.getElementById("text").innerHTML += "<br /> Please try again.";
		}

	// Recommendation for age categories from 4 to 11 years

	} else if (currFilterVal["minAge"] === 4 && currFilterVal["maxAge"] > 11) {
		
		// Birthday recommendations based on gender

		if(currFilterVal["occasion"].toLowerCase() === "birthday") {
			
			items = ['clothes','books','greeting','food','accessories','chocolates','toys'];

			if(currFilterVal["gender"] === "F") {
				items.push('jewellery');
				document.getElementById("customtitle").innerHTML = "Birthday Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Birthday Gift options for Him";
				displayButtons(items);
			}

		// Christmas recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "christmas") {

			items = ['clothes','books','greeting','food','accessories','chocolates','toys'];

			if(currFilterVal["gender"] === "F") {
				items.push('jewellery');
				document.getElementById("customtitle").innerHTML = "Christmas Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Christmas Gift options for Him";
				displayButtons(items);
			}

		// Diwali recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "diwali") {

			items = ['clothes','books','greeting','food','accessories','chocolates','toys'];

			if(currFilterVal["gender"] === "F") {
				items.push('jewellery');
				document.getElementById("customtitle").innerHTML = "Diwali Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Diwali Gift options for Him";
				displayButtons(items);
			}

		// Congratulatory recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "congratulations") {

			items = ['books','greeting','food','accessories','chocolates','toys'];

			if(currFilterVal["gender"] === "F") {
				items.push('jewellery');
				document.getElementById("customtitle").innerHTML = "Congratulatory Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Congratulatory Gift options for Him";
				displayButtons(items);
			}

		// Get well soon recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "get well soon") {

			items = ['books','greeting','food','chocolates','toys'];

			if(currFilterVal["gender"] === "F") {
				document.getElementById("customtitle").innerHTML = "Well-wishing Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Well-wishing Gift options for Him";
				displayButtons(items);
			}

		} else {
			document.getElementById("customtitle").innerHTML = "Invalid Options";
			document.getElementById("text").innerHTML = "Oops ! You seem to have selected a wrong combination of options.";
			document.getElementById("text").innerHTML += "<br /> Please try again.";
		}

	// Recommendation for age categories from 12 to 15 years

	} else if (currFilterVal["minAge"] === 12 && currFilterVal["maxAge"] > 15) {
		
		// Birthday recommendations based on gender

		if(currFilterVal["occasion"].toLowerCase() === "birthday") {
			
			items = ['clothes','books','greeting','food','accessories','chocolates','bouquet'];

			if(currFilterVal["gender"] === "F") {
				items.push('jewellery');
				document.getElementById("customtitle").innerHTML = "Birthday Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Birthday Gift options for Him";
				displayButtons(items);
			}

		// Christmas recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "christmas") {

			items = ['clothes','books','greeting','food','accessories','chocolates','bouquet'];

			if(currFilterVal["gender"] === "F") {
				items.push('jewellery');
				document.getElementById("customtitle").innerHTML = "Christmas Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Christmas Gift options for Him";
				displayButtons(items);
			}

		// Diwali recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "diwali") {

			items = ['clothes','books','greeting','food','accessories','chocolates','bouquet'];

			if(currFilterVal["gender"] === "F") {
				items.push('jewellery');
				document.getElementById("customtitle").innerHTML = "Diwali Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Diwali Gift options for Him";
				displayButtons(items);
			}

		// Congratulatory recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "congratulations") {

			items = ['books','greeting','food','accessories','chocolates','bouquet'];

			if(currFilterVal["gender"] === "F") {
				items.push('jewellery');
				document.getElementById("customtitle").innerHTML = "Congratulatory Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Congratulatory Gift options for Him";
				displayButtons(items);
			}

		// Get well soon recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "get well soon") {

			items = ['books','greeting','food','chocolates','bouquet'];

			if(currFilterVal["gender"] === "F") {
				document.getElementById("customtitle").innerHTML = "Well-wishing Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Well-wishing Gift options for Him";
				displayButtons(items);
			}

		// Sibling's Day recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "sibling's day") {

			items = ['clothes','books','greeting','food','accessories','chocolates','bouquet'];

			if(currFilterVal["gender"] === "F") {
				items.push('jewellery');
				document.getElementById("customtitle").innerHTML = "Sibling's Day Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Sibling's Day Gift options for Him";
				displayButtons(items);
			}

		// Thank You recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "thank you") {

			items = ['books','greeting','food','accessories','chocolates','bouquet'];

			if(currFilterVal["gender"] === "F") {
				items.push('jewellery');
				document.getElementById("customtitle").innerHTML = "Thank You Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Thank You Gift options for Him";
				displayButtons(items);
			}

		} else {
			document.getElementById("customtitle").innerHTML = "Invalid Options";
			document.getElementById("text").innerHTML = "Oops ! You seem to have selected a wrong combination of options.";
			document.getElementById("text").innerHTML += "<br /> Please try again.";
		}

	// Recommendation for age categories from 16 to 20 years

	} else if (currFilterVal["minAge"] === 16 && currFilterVal["maxAge"] > 20) {
		
		// Birthday recommendations based on gender

		if(currFilterVal["occasion"].toLowerCase() === "birthday") {
			
			items = ['clothes','books','greeting','food','accessories','chocolates','bouquet','electronics','giftcards'];

			if(currFilterVal["gender"] === "F") {
				items.push('jewellery');
				document.getElementById("customtitle").innerHTML = "Birthday Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Birthday Gift options for Him";
				displayButtons(items);
			}

		// Christmas recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "christmas") {

			items = ['clothes','books','greeting','food','accessories','chocolates','bouquet','electronics','giftcards'];

			if(currFilterVal["gender"] === "F") {
				items.push('jewellery');
				document.getElementById("customtitle").innerHTML = "Christmas Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Christmas Gift options for Him";
				displayButtons(items);
			}

		// Diwali recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "diwali") {

			items = ['clothes','books','greeting','food','accessories','chocolates','bouquet','electronics','giftcards'];

			if(currFilterVal["gender"] === "F") {
				items.push('jewellery');
				document.getElementById("customtitle").innerHTML = "Diwali Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Diwali Gift options for Him";
				displayButtons(items);
			}

		// Congratulatory recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "congratulations") {

			items = ['books','greeting','food','accessories','chocolates','bouquet','electronics','giftcards'];

			if(currFilterVal["gender"] === "F") {
				items.push('jewellery');
				document.getElementById("customtitle").innerHTML = "Congratulatory Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Congratulatory Gift options for Him";
				displayButtons(items);
			}

		// Get well soon recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "get well soon") {

			items = ['books','greeting','food','chocolates','bouquet'];

			if(currFilterVal["gender"] === "F") {
				document.getElementById("customtitle").innerHTML = "Well-wishing Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Well-wishing Gift options for Him";
				displayButtons(items);
			}

		// Sibling's Day recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "sibling's day") {

			items = ['clothes','books','greeting','food','accessories','chocolates','bouquet','electronics','giftcards'];

			if(currFilterVal["gender"] === "F") {
				items.push('jewellery');
				document.getElementById("customtitle").innerHTML = "Sibling's Day Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Sibling's Day Gift options for Him";
				displayButtons(items);
			}

		// Thank You recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "thank you") {

			items = ['books','greeting','food','accessories','chocolates','bouquet','giftcards'];

			if(currFilterVal["gender"] === "F") {
				items.push('jewellery');
				document.getElementById("customtitle").innerHTML = "Thank You Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Thank You Gift options for Him";
				displayButtons(items);
			}

		// Valentine's Day recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "valentine's day") {

			items = ['clothes','books','greeting','food','accessories','chocolates','bouquet','electronics','giftcards'];

			if(currFilterVal["gender"] === "F") {
				items.push('jewellery');
				document.getElementById("customtitle").innerHTML = "Valentine's Day Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Valentine's Day Gift options for Him";
				displayButtons(items);
			}

		} else {
			document.getElementById("customtitle").innerHTML = "Invalid Options";
			document.getElementById("text").innerHTML = "Oops ! You seem to have selected a wrong combination of options.";
			document.getElementById("text").innerHTML += "<br /> Please try again.";
		}

	// Recommendation for age categories greater than 21 years

	} else if (currFilterVal["minAge"] === 21) {
		
		// Birthday recommendations based on gender

		if(currFilterVal["occasion"].toLowerCase() === "birthday") {
			
			items = ['clothes','books','greeting','food','accessories','chocolates','bouquet','electronics','giftcards','collectible'];

			if(currFilterVal["gender"] === "F") {
				items.push('jewellery');
				items.push('cosmetics');
				document.getElementById("customtitle").innerHTML = "Birthday Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Birthday Gift options for Him";
				displayButtons(items);
			}

		// Christmas recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "christmas") {

			items = ['clothes','books','greeting','food','accessories','chocolates','bouquet','electronics','giftcards','collectible'];

			if(currFilterVal["gender"] === "F") {
				items.push('jewellery');
				items.push('cosmetics');
				document.getElementById("customtitle").innerHTML = "Christmas Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Christmas Gift options for Him";
				displayButtons(items);
			}

		// Diwali recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "diwali") {

			items = ['clothes','books','greeting','food','accessories','chocolates','bouquet','electronics','giftcards','collectible'];

			if(currFilterVal["gender"] === "F") {
				items.push('jewellery');
				items.push('cosmetics');
				document.getElementById("customtitle").innerHTML = "Diwali Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Diwali Gift options for Him";
				displayButtons(items);
			}

		// Congratulatory recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "congratulations") {

			items = ['books','greeting','food','accessories','chocolates','bouquet','electronics','giftcards','collectible'];

			if(currFilterVal["gender"] === "F") {
				items.push('jewellery');
				items.push('cosmetics');
				document.getElementById("customtitle").innerHTML = "Congratulatory Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Congratulatory Gift options for Him";
				displayButtons(items);
			}

		// Get well soon recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "get well soon") {

			items = ['books','greeting','food','chocolates','bouquet','collectible'];

			if(currFilterVal["gender"] === "F") {
				document.getElementById("customtitle").innerHTML = "Well-wishing Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Well-wishing Gift options for Him";
				displayButtons(items);
			}

		// Sibling's Day recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "sibling's day") {

			items = ['clothes','books','greeting','food','accessories','chocolates','bouquet','electronics','giftcards','collectible'];

			if(currFilterVal["gender"] === "F") {
				items.push('jewellery');
				items.push('cosmetics');
				document.getElementById("customtitle").innerHTML = "Sibling's Day Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Sibling's Day Gift options for Him";
				displayButtons(items);
			}

		// Thank You recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "thank you") {

			items = ['books','greeting','food','accessories','chocolates','bouquet','giftcards','collectible'];

			if(currFilterVal["gender"] === "F") {
				items.push('jewellery');
				items.push('cosmetics');
				document.getElementById("customtitle").innerHTML = "Thank You Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Thank You Gift options for Him";
				displayButtons(items);
			}

		// Valentine's Day recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "valentine's day") {

			items = ['clothes','books','greeting','food','accessories','chocolates','bouquet','electronics','giftcards','collectible'];

			if(currFilterVal["gender"] === "F") {
				items.push('jewellery');
				items.push('cosmetics');
				document.getElementById("customtitle").innerHTML = "Valentine's Day Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Valentine's Day Gift options for Him";
				displayButtons(items);
			}

		// Wedding recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "wedding") {

			items = ['clothes','books','greeting','accessories','chocolates','bouquet','electronics','giftcards','collectible'];

			if(currFilterVal["gender"] === "F") {
				items.push('jewellery');
				items.push('cosmetics');
				document.getElementById("customtitle").innerHTML = "Wedding Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Wedding Gift options for Him";
				displayButtons(items);
			}

		// Anniversary recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "anniversary") {

			items = ['clothes','books','greeting','food','accessories','chocolates','bouquet','electronics','giftcards','collectible'];

			if(currFilterVal["gender"] === "F") {
				items.push('jewellery');
				items.push('cosmetics');
				document.getElementById("customtitle").innerHTML = "Anniversary Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Anniversary Gift options for Him";
				displayButtons(items);
			}

		// Baby Shower recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "baby shower") {

			items = ['clothes','books','greeting','food','toys','stroller','accessories'];

			if(currFilterVal["gender"] === "F") {
				document.getElementById("customtitle").innerHTML = "Baby Shower Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Baby Shower Gift options for Him";
				displayButtons(items);
			}

		// Mother's Day recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "mother's day") {

			items = ['clothes','books','greeting','food','accessories','chocolates','bouquet','electronics','giftcards','collectible'];
			items.push('jewellery');
			items.push('cosmetics');
			document.getElementById("customtitle").innerHTML = "Mother's Day Gift options";
			displayButtons(items);

		// Father's day recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "father's day") {

			items = ['clothes','books','greeting','food','accessories','chocolates','bouquet','electronics','giftcards','collectible'];
			document.getElementById("customtitle").innerHTML = "Father's Day Gift options";
			displayButtons(items);

		// Graduation recommendations based on gender

		} else if (currFilterVal["occasion"].toLowerCase() === "graduation") {

			items = ['clothes','books','greeting','accessories','chocolates','bouquet','electronics','giftcards','collectible'];

			if(currFilterVal["gender"] === "F") {
				items.push('jewellery');
				items.push('cosmetics');
				document.getElementById("customtitle").innerHTML = "Graduation Gift options for Her";
				displayButtons(items);
			} else {
				document.getElementById("customtitle").innerHTML = "Graduation Gift options for Him";
				displayButtons(items);
			}

		} else {
			document.getElementById("customtitle").innerHTML = "Invalid Options";
			document.getElementById("text").innerHTML = "Oops ! You seem to have selected a wrong combination of options.";
			document.getElementById("text").innerHTML += "<br /> Please try again.";
		}
		
	} else {
		alert("here");
		document.getElementById("customtitle").innerHTML = "Invalid Options";
		document.getElementById("text").innerHTML = "Oops ! You seem to have selected a wrong combination of options.";
		document.getElementById("text").innerHTML += "<br /> Please try again.";
	}

	if(localStorage.getItem("xItemList") === null) {

		localStorage.setItem("xItemList", items);
		//alert(localStorage.getItem("xItemList"));

	} else {

		localStorage.setItem("xItemList", "|" + items);
		//alert("xitemlist " + localStorage.getItem("xItemList"));

	}
/*
	for(var i = 0; i < items.length; i++) {

		document.getElementById(i).onclick = buttonAnimate;
		//document.getElementById("0").onclick = function() {
		//	alert("hello");
		//}
	}
*/
}

window.onload = init;