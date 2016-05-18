/*  index2.js : JavaScript to display the subcategories of the selected category
    INST630 Group Project
    Team: Karishma Ghiya - kghiya93@umd.edu
          Anushka Kher   - akher@umd.edu
          Pujita Tipnis  - ptipnis@umd.edu
*/

function addFinal(idA) {
			var finalItem = document.getElementById(idA).innerText;
			localStorage.setItem("yFinalItem",finalItem);
			window.location.assign("resultsTry.html");
	}

function init() {

	var itemList = localStorage.getItem("xSelectedItem");
	var itemSplit = itemList.split("|");
	var item = itemSplit[itemSplit.length - 1];

	document.getElementById("cn-button").innerHTML = "<img src='images/" + item + ".png' width='50px' height='50px' />";

  	var filterVals = localStorage.getItem("filterValsLS");
	var filterValSplit = filterVals.split("|");
	var currFilterVal = JSON.parse(filterValSplit[filterValSplit.length - 1]);

	if (item === "clothes") {

		if (currFilterVal["gender"] === "F") {
			
			document.getElementById("cn-wrapper").innerHTML = "<ul><li id='1' onclick='addFinal(this.id);'><a href='#'><span>Shirts</span></a></li>" +
				"<li id='2' onclick='addFinal(this.id);'><a href='#'><span>Pants</span></a></li>" +
				"<li id='3' onclick='addFinal(this.id);'><a href='#'><span>Jackets</span></a></li>" +
				"<li id='4' onclick='addFinal(this.id);'><a href='#'><span>Dresses</span></a></li>" + 
				"<li id='5' onclick='addFinal(this.id);'><a href='#'><span>Skirts</span></a></li>" +
				"<li id='6' onclick='addFinal(this.id);'><a href='#'><span>Swimwear</span></a></li>" + 
				"<li id='7' onclick='addFinal(this.id);'><a href='#'><span>Formals</span></a></li></ul>";

			var styleID = document.createElement('style');
			styleID.innerHTML = ".csstransforms .cn-wrapper li {" +
				"-webkit-transform: rotate(76deg) skew(60deg);" +
				"-moz-transform: rotate(76deg) skew(60deg);" +
				"-ms-transform: rotate(76deg) skew(60deg);" +
				"transform: rotate(76deg) skew(60deg);" +
				"pointer-events: none;}" +
				".csstransforms .cn-wrapper li a {" +
				"-webkit-transform: skew(-60deg) rotate(-75deg) scale(1);" +
				"-moz-transform: skew(-60deg) rotate(-75deg) scale(1);" +
				"-ms-transform: skew(-60deg) rotate(-75deg) scale(1);" +
				"transform: skew(-60deg) rotate(-75deg) scale(1);" +
				"pointer-events: auto;}" +
				".csstransforms .opened-nav li:first-child {" +
				"-webkit-transform: rotate(-20deg) skew(60deg);" +
				"-moz-transform: rotate(-20deg) skew(60deg);" +
				"-ms-transform: rotate(-20deg) skew(60deg);" +
				"transform: rotate(-20deg) skew(60deg);}" +
				".csstransforms .opened-nav li:nth-child(2) {" +
				"-webkit-transform: rotate(12deg) skew(60deg);" +
				"-moz-transform: rotate(12deg) skew(60deg);" +
				"-ms-transform: rotate(12deg) skew(60deg);" +
				"transform: rotate(12deg) skew(60deg);}" +
				".csstransforms .opened-nav  li:nth-child(3) {" +
				"-webkit-transform: rotate(44deg) skew(60deg);" +
				"-moz-transform: rotate(44deg) skew(60deg);" +
				"-ms-transform: rotate(44deg) skew(60deg);" +
				"transform: rotate(44deg) skew(60deg);}" +
				".csstransforms .opened-nav li:nth-child(4) {" +
				"-webkit-transform: rotate(76deg) skew(60deg);" +
				"-moz-transform: rotate(76deg) skew(60deg);" +
				"-ms-transform: rotate(76deg) skew(60deg);" +
				"transform: rotate(76deg) skew(60deg);}" +
				".csstransforms .opened-nav li:nth-child(5) {" +
				"-webkit-transform: rotate(108deg) skew(60deg);" +
				"-moz-transform: rotate(108deg) skew(60deg);" +
				"-ms-transform: rotate(108deg) skew(60deg);" +
				"transform: rotate(108deg) skew(60deg);}" +
				".csstransforms .opened-nav li:nth-child(6) {" +
				"-webkit-transform: rotate(140deg) skew(60deg);" +
				"-moz-transform: rotate(140deg) skew(60deg);" +
				"-ms-transform: rotate(140deg) skew(60deg);" +
				"transform: rotate(140deg) skew(60deg);}" +
				".csstransforms .opened-nav li:nth-child(7) {" +
				"-webkit-transform: rotate(172deg) skew(60deg);" +
				"-moz-transform: rotate(172deg) skew(60deg);" +
				"-ms-transform: rotate(172deg) skew(60deg);" +
				"transform: rotate(172deg) skew(60deg);}";

				document.body.appendChild(styleID);

		} else {
			
			document.getElementById("cn-wrapper").innerHTML = "<ul><li id='1' onclick='addFinal(this.id);'><a href='#'><span>Shirts</span></a></li>" +
				"<li id='2' onclick='addFinal(this.id);'><a href='#'><span>Pants</span></a></li>" +
				"<li id='3' onclick='addFinal(this.id);'><a href='#'><span>Jackets</span></a></li>" +
				"<li id='4' onclick='addFinal(this.id);'><a href='#'><span>Swimwear</span></a></li>" + 
				"<li id='5' onclick='addFinal(this.id);'><a href='#'><span>Formals</span></a></li></ul>";

		}

	} else if (item === "toys") {

		// add more elements

		document.getElementById("cn-wrapper").innerHTML = "<ul><li id='1' onclick='addFinal(this.id);'><a href='#'><span>ActionToy</span></a></li>" +
			"<li id='2' onclick='addFinal(this.id);'><a href='#'><span>SoftToys</span></a></li>" +
			"<li id='3' onclick='addFinal(this.id);'><a href='#'><span>Cars</span></a></li>" +
			"<li id='4' onclick='addFinal(this.id);'><a href='#'><span>DIY</span></a></li>" + 
			"<li id='5' onclick='addFinal(this.id);'><a href='#'><span>Dolls</span></a></li>" +
			"<li id='6' onclick='addFinal(this.id);'><a href='#'><span>Learn</span></a></li>" + 
			"<li id='7' onclick='addFinal(this.id);'><a href='#'><span>Electronic</span></a></li>" +
			"<li id='8' onclick='addFinal(this.id);'><a href='#'><span>Puzzles</span></a></li>" + 
			"<li id='9' onclick='addFinal(this.id);'><a href='#'><span>SoundToy</span></a></li></ul>";

			var styleID = document.createElement('style');
			styleID.innerHTML = ".csstransforms .cn-wrapper li {" +
				"-webkit-transform: rotate(76deg) skew(60deg);" +
				"-moz-transform: rotate(76deg) skew(60deg);" +
				"-ms-transform: rotate(76deg) skew(60deg);" +
				"transform: rotate(76deg) skew(60deg);" +
				"pointer-events: none;}" +
				".csstransforms .cn-wrapper li a {" +
				"-webkit-transform: skew(-60deg) rotate(-75deg) scale(1);" +
				"-moz-transform: skew(-60deg) rotate(-75deg) scale(1);" +
				"-ms-transform: skew(-60deg) rotate(-75deg) scale(1);" +
				"transform: skew(-60deg) rotate(-75deg) scale(1);" +
				"pointer-events: auto;}" +
				".csstransforms .opened-nav li:first-child {" +
				"-webkit-transform: rotate(-80deg) skew(60deg);" +
				"-moz-transform: rotate(-80deg) skew(60deg);" +
				"-ms-transform: rotate(-80deg) skew(60deg);" +
				"transform: rotate(-80deg) skew(60deg);}" +
				".csstransforms .opened-nav li:nth-child(2) {" +
				"-webkit-transform: rotate(-40deg) skew(60deg);" +
				"-moz-transform: rotate(-40deg) skew(60deg);" +
				"-ms-transform: rotate(-40deg) skew(60deg);" +
				"transform: rotate(-40deg) skew(60deg);}" +
				".csstransforms .opened-nav  li:nth-child(3) {" +
				"-webkit-transform: rotate(0deg) skew(60deg);" +
				"-moz-transform: rotate(0deg) skew(60deg);" +
				"-ms-transform: rotate(0deg) skew(60deg);" +
				"transform: rotate(0deg) skew(60deg);}" +
				".csstransforms .opened-nav li:nth-child(4) {" +
				"-webkit-transform: rotate(40deg) skew(60deg);" +
				"-moz-transform: rotate(40deg) skew(60deg);" +
				"-ms-transform: rotate(40deg) skew(60deg);" +
				"transform: rotate(40deg) skew(60deg);}" +
				".csstransforms .opened-nav li:nth-child(5) {" +
				"-webkit-transform: rotate(80deg) skew(60deg);" +
				"-moz-transform: rotate(80deg) skew(60deg);" +
				"-ms-transform: rotate(80deg) skew(60deg);" +
				"transform: rotate(80deg) skew(60deg);}" +
				".csstransforms .opened-nav li:nth-child(6) {" +
				"-webkit-transform: rotate(120deg) skew(60deg);" +
				"-moz-transform: rotate(120deg) skew(60deg);" +
				"-ms-transform: rotate(120deg) skew(60deg);" +
				"transform: rotate(120deg) skew(60deg);}" +
				".csstransforms .opened-nav li:nth-child(7) {" +
				"-webkit-transform: rotate(160deg) skew(60deg);" +
				"-moz-transform: rotate(160deg) skew(60deg);" +
				"-ms-transform: rotate(160deg) skew(60deg);" +
				"transform: rotate(160deg) skew(60deg);}" +
				".csstransforms .opened-nav li:nth-child(8) {" +
				"-webkit-transform: rotate(200deg) skew(60deg);" +
				"-moz-transform: rotate(200deg) skew(60deg);" +
				"-ms-transform: rotate(200deg) skew(60deg);" +
				"transform: rotate(200deg) skew(60deg);}" +
				".csstransforms .opened-nav li:nth-child(9) {" +
				"-webkit-transform: rotate(240deg) skew(60deg);" +
				"-moz-transform: rotate(240deg) skew(60deg);" +
				"-ms-transform: rotate(240deg) skew(60deg);" +
				"transform: rotate(240deg) skew(60deg);}";

				document.body.appendChild(styleID);

	} else if (item === "books") {

		// add more elements

		document.getElementById("cn-wrapper").innerHTML = "<ul><li id='1' onclick='addFinal(this.id);'><a href='#'><span>Sci-Fi</span></a></li>" +
			"<li id='2' onclick='addFinal(this.id);'><a href='#'><span>Action</span></a></li>" +
			"<li id='3' onclick='addFinal(this.id);'><a href='#'><span>Romance</span></a></li>" +
			"<li id='4' onclick='addFinal(this.id);'><a href='#'><span>Mystery</span></a></li>" + 
			"<li id='5' onclick='addFinal(this.id);'><a href='#'><span>Health</span></a></li>" +
			"<li id='6' onclick='addFinal(this.id);'><a href='#'><span>Children's</span></a></li>" + 
			"<li id='7' onclick='addFinal(this.id);'><a href='#'><span>Religion</span></a></li>" +
			"<li id='8' onclick='addFinal(this.id);'><a href='#'><span>Comics</span></a></li>" + 
			"<li id='9' onclick='addFinal(this.id);'><a href='#'><span>Cookbook</span></a></li></ul>";

		var styleID = document.createElement('style');
		styleID.innerHTML = ".csstransforms .cn-wrapper li {" +
			"-webkit-transform: rotate(76deg) skew(60deg);" +
			"-moz-transform: rotate(76deg) skew(60deg);" +
			"-ms-transform: rotate(76deg) skew(60deg);" +
			"transform: rotate(76deg) skew(60deg);" +
			"pointer-events: none;}" +
			".csstransforms .cn-wrapper li a {" +
			"-webkit-transform: skew(-60deg) rotate(-75deg) scale(1);" +
			"-moz-transform: skew(-60deg) rotate(-75deg) scale(1);" +
			"-ms-transform: skew(-60deg) rotate(-75deg) scale(1);" +
			"transform: skew(-60deg) rotate(-75deg) scale(1);" +
			"pointer-events: auto;}" +
			".csstransforms .opened-nav li:first-child {" +
			"-webkit-transform: rotate(-80deg) skew(60deg);" +
			"-moz-transform: rotate(-80deg) skew(60deg);" +
			"-ms-transform: rotate(-80deg) skew(60deg);" +
			"transform: rotate(-80deg) skew(60deg);}" +
			".csstransforms .opened-nav li:nth-child(2) {" +
			"-webkit-transform: rotate(-40deg) skew(60deg);" +
			"-moz-transform: rotate(-40deg) skew(60deg);" +
			"-ms-transform: rotate(-40deg) skew(60deg);" +
			"transform: rotate(-40deg) skew(60deg);}" +
			".csstransforms .opened-nav  li:nth-child(3) {" +
			"-webkit-transform: rotate(0deg) skew(60deg);" +
			"-moz-transform: rotate(0deg) skew(60deg);" +
			"-ms-transform: rotate(0deg) skew(60deg);" +
			"transform: rotate(0deg) skew(60deg);}" +
			".csstransforms .opened-nav li:nth-child(4) {" +
			"-webkit-transform: rotate(40deg) skew(60deg);" +
			"-moz-transform: rotate(40deg) skew(60deg);" +
			"-ms-transform: rotate(40deg) skew(60deg);" +
			"transform: rotate(40deg) skew(60deg);}" +
			".csstransforms .opened-nav li:nth-child(5) {" +
			"-webkit-transform: rotate(80deg) skew(60deg);" +
			"-moz-transform: rotate(80deg) skew(60deg);" +
			"-ms-transform: rotate(80deg) skew(60deg);" +
			"transform: rotate(80deg) skew(60deg);}" +
			".csstransforms .opened-nav li:nth-child(6) {" +
			"-webkit-transform: rotate(120deg) skew(60deg);" +
			"-moz-transform: rotate(120deg) skew(60deg);" +
			"-ms-transform: rotate(120deg) skew(60deg);" +
			"transform: rotate(120deg) skew(60deg);}" +
			".csstransforms .opened-nav li:nth-child(7) {" +
			"-webkit-transform: rotate(160deg) skew(60deg);" +
			"-moz-transform: rotate(160deg) skew(60deg);" +
			"-ms-transform: rotate(160deg) skew(60deg);" +
			"transform: rotate(160deg) skew(60deg);}" +
			".csstransforms .opened-nav li:nth-child(8) {" +
			"-webkit-transform: rotate(200deg) skew(60deg);" +
			"-moz-transform: rotate(200deg) skew(60deg);" +
			"-ms-transform: rotate(200deg) skew(60deg);" +
			"transform: rotate(200deg) skew(60deg);}" +
			".csstransforms .opened-nav li:nth-child(9) {" +
			"-webkit-transform: rotate(240deg) skew(60deg);" +
			"-moz-transform: rotate(240deg) skew(60deg);" +
			"-ms-transform: rotate(240deg) skew(60deg);" +
			"transform: rotate(240deg) skew(60deg);}";

			document.body.appendChild(styleID);

	} else if (item === "food") {

			document.getElementById("cn-wrapper").innerHTML = "<ul><li id='1' onclick='addFinal(this.id);'><a href='#'><span>Cake</span></a></li>" +
				"<li id='2' onclick='addFinal(this.id);'><a href='#'><span>IceCream</span></a></li>" +
				"<li id='3' onclick='addFinal(this.id);'><a href='#'><span>Cookies</span></a></li>" +
				"<li id='4' onclick='addFinal(this.id);'><a href='#'><span>Sweets</span></a></li>" + 
				"<li id='5' onclick='addFinal(this.id);'><a href='#'><span>Beverage</span></a></li></ul>";

	} else if (item === "accessories") {

		if (currFilterVal["gender"] === "F") {

			document.getElementById("cn-wrapper").innerHTML = "<ul><li id='1' onclick='addFinal(this.id);'><a href='#'><span>Watch</span></a></li>" +
				"<li id='2' onclick='addFinal(this.id);'><a href='#'><span>Sunglasses</span></a></li>" +
				"<li id='3' onclick='addFinal(this.id);'><a href='#'><span>Wallet</span></a></li>" +
				"<li id='4' onclick='addFinal(this.id);'><a href='#'><span>Purse</span></a></li>" + 
				"<li id='5' onclick='addFinal(this.id);'><a href='#'><span>Belt</span></a></li></ul>";

		} else {

			document.getElementById("cn-wrapper").innerHTML = "<ul><li id='1' onclick='addFinal(this.id);'><a href='#'><span>Watch</span></a></li>" +
				"<li id='2' onclick='addFinal(this.id);'><a href='#'><span>Sunglasses</span></a></li>" +
				"<li id='3' onclick='addFinal(this.id);'><a href='#'><span>Wallet</span></a></li>" +
				"<li id='4' onclick='addFinal(this.id);'><a href='#'><span>Tie</span></a></li>" + 
				"<li id='5' onclick='addFinal(this.id);'><a href='#'><span>Belt</span></a></li></ul>";

		}
	} else if (item === "jewellery") {

		document.getElementById("cn-wrapper").innerHTML = "<ul><li id='1' onclick='addFinal(this.id);'><a href='#'><span>Earrings</span></a></li>" +
			"<li id='2' onclick='addFinal(this.id);'><a href='#'><span>Necklace</span></a></li>" +
			"<li id='3' onclick='addFinal(this.id);'><a href='#'><span>Ring</span></a></li>" +
			"<li id='4' onclick='addFinal(this.id);'><a href='#'><span>Bracelet</span></a></li>" + 
			"<li id='5' onclick='addFinal(this.id);'><a href='#'><span>Anklet</span></a></li></ul>";

	} else if (item === "electronics") {

		document.getElementById("cn-wrapper").innerHTML = "<ul><li id='1' onclick='addFinal(this.id);'><a href='#'><span>Mobile</span></a></li>" +
			"<li id='2' onclick='addFinal(this.id);'><a href='#'><span>Tablet</span></a></li>" +
			"<li id='3' onclick='addFinal(this.id);'><a href='#'><span>Laptop</span></a></li>" +
			"<li id='4' onclick='addFinal(this.id);'><a href='#'><span>Watch</span></a></li>" + 
			"<li id='5' onclick='addFinal(this.id);'><a href='#'><span>Fitbit</span></a></li></ul>";

	} else if (item === "cosmetics") {

			document.getElementById("cn-wrapper").innerHTML = "<ul><li id='1' onclick='addFinal(this.id);'><a href='#'><span>Eyeshadow</span></a></li>" +
				"<li id='2' onclick='addFinal(this.id);'><a href='#'><span>Mascara</span></a></li>" +
				"<li id='3' onclick='addFinal(this.id);'><a href='#'><span>Lipstick</span></a></li>" +
				"<li id='4' onclick='addFinal(this.id);'><a href='#'><span>Blush</span></a></li>" + 
				"<li id='5' onclick='addFinal(this.id);'><a href='#'><span>Foundation</span></a></li>" +
				"<li id='6' onclick='addFinal(this.id);'><a href='#'><span>Cream</span></a></li>" + 
				"<li id='7' onclick='addFinal(this.id);'><a href='#'><span>Perfume</span></a></li></ul>";

			var styleID = document.createElement('style');
			styleID.innerHTML = ".csstransforms .cn-wrapper li {" +
				"-webkit-transform: rotate(76deg) skew(60deg);" +
				"-moz-transform: rotate(76deg) skew(60deg);" +
				"-ms-transform: rotate(76deg) skew(60deg);" +
				"transform: rotate(76deg) skew(60deg);" +
				"pointer-events: none;}" +
				".csstransforms .cn-wrapper li a {" +
				"-webkit-transform: skew(-60deg) rotate(-75deg) scale(1);" +
				"-moz-transform: skew(-60deg) rotate(-75deg) scale(1);" +
				"-ms-transform: skew(-60deg) rotate(-75deg) scale(1);" +
				"transform: skew(-60deg) rotate(-75deg) scale(1);" +
				"pointer-events: auto;}" +
				".csstransforms .opened-nav li:first-child {" +
				"-webkit-transform: rotate(-20deg) skew(60deg);" +
				"-moz-transform: rotate(-20deg) skew(60deg);" +
				"-ms-transform: rotate(-20deg) skew(60deg);" +
				"transform: rotate(-20deg) skew(60deg);}" +
				".csstransforms .opened-nav li:nth-child(2) {" +
				"-webkit-transform: rotate(12deg) skew(60deg);" +
				"-moz-transform: rotate(12deg) skew(60deg);" +
				"-ms-transform: rotate(12deg) skew(60deg);" +
				"transform: rotate(12deg) skew(60deg);}" +
				".csstransforms .opened-nav  li:nth-child(3) {" +
				"-webkit-transform: rotate(44deg) skew(60deg);" +
				"-moz-transform: rotate(44deg) skew(60deg);" +
				"-ms-transform: rotate(44deg) skew(60deg);" +
				"transform: rotate(44deg) skew(60deg);}" +
				".csstransforms .opened-nav li:nth-child(4) {" +
				"-webkit-transform: rotate(76deg) skew(60deg);" +
				"-moz-transform: rotate(76deg) skew(60deg);" +
				"-ms-transform: rotate(76deg) skew(60deg);" +
				"transform: rotate(76deg) skew(60deg);}" +
				".csstransforms .opened-nav li:nth-child(5) {" +
				"-webkit-transform: rotate(108deg) skew(60deg);" +
				"-moz-transform: rotate(108deg) skew(60deg);" +
				"-ms-transform: rotate(108deg) skew(60deg);" +
				"transform: rotate(108deg) skew(60deg);}" +
				".csstransforms .opened-nav li:nth-child(6) {" +
				"-webkit-transform: rotate(140deg) skew(60deg);" +
				"-moz-transform: rotate(140deg) skew(60deg);" +
				"-ms-transform: rotate(140deg) skew(60deg);" +
				"transform: rotate(140deg) skew(60deg);}" +
				".csstransforms .opened-nav li:nth-child(7) {" +
				"-webkit-transform: rotate(172deg) skew(60deg);" +
				"-moz-transform: rotate(172deg) skew(60deg);" +
				"-ms-transform: rotate(172deg) skew(60deg);" +
				"transform: rotate(172deg) skew(60deg);}";

				document.body.appendChild(styleID);
	}
}

window.onload = init;