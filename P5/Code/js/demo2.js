(function(){

	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper');

    var itemList = localStorage.getItem("xSelectedItem");
	var itemSplit = itemList.split("|");
	var item = itemSplit[itemSplit.length - 1];

    //open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);

	function handler(){
	  if(!open){
	    this.innerHTML = "Close";
	    classie.add(wrapper, 'opened-nav');
	  }
	  else{
	    this.innerHTML = "<img src='images/" + item + ".png' width='50px' height='50px' />";
		classie.remove(wrapper, 'opened-nav');
	  }
	  open = !open;
	}
	function closeWrapper(){
		classie.remove(wrapper, 'opened-nav');
	}

})();
