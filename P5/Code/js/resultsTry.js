var urlStr;
var urlMacy;
var frame1_link;
var frame2_link;
var frame3_link;
var flag1 = false;
var flag2 = false;
var flag3 = false;
var flagMacy = false;

function openSite(evt, siteName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabcontent.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(siteName).style.display = "block";
    evt.currentTarget.className += " active";
      //  var urlMacy = "http://www1.macys.com/shop/search/Price/"+10+"%257C"+250+"?keyword=shirts";
      if(flagMacy === false) {
            //alert(urlMacy);
            document.getElementById("myDemoFrame").src=urlMacy;
        }
        else {
            //alert("h="+urlMacy);
                        document.getElementById("myDemoFrame").src="http://www1.macys.com//";

        }
       // alert(frame1_link);
       // alert(frame2_link);
       // alert(frame3_link);
       // var h = "http://www.uncommongoods.com/search.html/find/?active_nav=1&displayedproducts=60&i=1&max=250&min=10&q=shirts&q1=men&sp_cs=UTF-8&x1=recipients&xrm=recipientsshirts&sp_cs=UTF-8&xrm=recipients";
       var h = frame3_link;
        if(flag1=== false) {
            document.getElementById("myDemoFrame1").src = frame1_link;
        }
        else {
            document.getElementById("myDemoFrame1").src = "http://www.thinkgeek.com/";
        }
        if(flag2 === false) {
            document.getElementById("myDemoFrame2").src = frame2_link;
        }
        else {
            document.getElementById("myDemoFrame2").src = "http://www.gifts.com/";

        }
        if(flag3 === false) {
            document.getElementById("myDemoFrame3").src = h;
        }
        else {
            document.getElementById("myDemoFrame3").src = "http://www.uncommongoods.com/gifts/";

        }
        if(siteName === "amazon") {
            var win=window.open(urlStr,"_blank");
            win.blur();
        }

}


function itemsCon(final1,final2) {
    this.final1 = final1;
    this.final2 = final2;
}

function addStr(age, gender) {
    var urlStr;

    if(age <= 3) {
        if(gender === "m") {
            urlStr = "+for+baby+boy";

        }
        else {
            urlStr = "+for+baby+girl";
        }
    }
    else if(age <= 15) {
        if(gender === "m") {
            urlStr = "+for+boys";
        }
        else {
            urlStr = "+for+girls";
        }
    }

    else {
        if(gender === "m") {
            urlStr = "+for+men";
        }

        else {
            urlStr = "+for+women";
        }
    }

    return (urlStr);
}

function callhtml() {

    var filterVals = localStorage.getItem("filterValsLS");
    var filterValSplit = filterVals.split("|");
    var currFilterVal = JSON.parse(filterValSplit[filterValSplit.length - 1]);

    var items1 = localStorage.getItem("xSelectedItem");
    var items2 = items1.split("|");
    var itemFirst = items2[items2.length - 1];

    var itemSecond = localStorage.getItem("yFinalItem");

    var age = currFilterVal["maxAge"];
    var gender = currFilterVal["gender"].toLowerCase();
    var minCost = currFilterVal["minCost"];
    var maxCost = currFilterVal["maxCost"];
   // alert("hello");
    
   /* var age = "15";
    var gender = "m";
    var minCost = "10";
    var maxCost = "250";
    minCostAm = minCost+"00";
    maxCostAm = maxCost+"00";
    var itemFirst = "clothes";
    var itemSecond = "shirts"; */
    
    var itemStr;
    var option2;

    frame1_link = "http://www.thinkgeek.com/brain/whereisit.cgi?t=";
    frame2_link = "http://www.gifts.com/ProductSearch_r.aspx?start=&spell=&q=";
    frame3_link = "http://www.uncommongoods.com/search.html/find/?active_nav=1&displayedproducts=60&i=1&max="+maxCost +"&min="+minCost+"&q="; 

    var items = new itemsCon(itemFirst,itemSecond);

    if(items["final1"].toLowerCase() === "clothes") {
        urlStr = addStr(age,gender);
        if(items["final2"].toLowerCase() === "formals") {
            urlMacy = "formalwear"+urlStr;
        }
        else {
            urlMacy = items["final2"].toLowerCase()+urlStr;
        }
        urlStr = items["final2"].toLowerCase()+urlStr;
        
        option2 = items["final2"].toLowerCase();        
        itemStr = option2;
        
        if (gender === "m") {

            frame3_link += option2+"&q1=men&sp_cs=UTF-8&x1=recipients&xrm=recipients";
            
        }
        else
        {
            frame3_link += option2+"&q1=women&sp_cs=UTF-8&x1=recipients&xrm=recipients";
        }
        frame1_link += option2;
        frame2_link += option2;
        if (option2 === "shirts" || option2 === "pants" || option2 === "swimwear" || option2 === "skirts" || option2 === "formals") {
            //3rd uncommon goods disappear
            flag3 = true;
            frame3_link += itemStr +"&sp_cs=UTF-8&xrm=recipients";
             if (option2 === "swimwear") {
                flag1 = true;
                frame1_link += itemStr;
             }
        }
        if (option2 !== "shirts") {
            flag2 = true;
            frame2_link += itemStr;
        }
    }

    else if(items["final1"].toLowerCase() === "toys") {
        itemStr = items["final2"].toLowerCase();
        itemStr = itemStr.replace(/\s/g, "+");
        urlStr = itemStr;

        /*frame1_link += option2;
        frame2_link += option2;
        frame3_link += option2 + "&sp_cs=UTF-8&xrm=recipients"; */

        //Action toy:
        if ( itemStr === "actiontoy") {
            itemStr = "action toys";
            frame1_link += itemStr;
            frame2_link += itemStr;
            urlMacy = "toys";
            //hide 3
            flag3 = true;
            frame3_link += itemStr +"&sp_cs=UTF-8&xrm=recipients";
        }
        else if (itemStr === "softtoys" || itemStr === "cars" || itemStr === "dolls" || itemStr === "puzzles") 
        {
            if (itemStr === "softtoys") {
                itemStr = "soft toys";
                urlMacy = "stuffed+animals";
            }
            frame1_link += itemStr;
            frame2_link += itemStr;
            frame3_link += itemStr +"&sp_cs=UTF-8&xrm=recipients"; 
        }
        else if (itemStr === "diy") {
            //construction toys
            frame1_link += "construction toys";
            urlMacy = "construction+toys";
            frame3_link += "construction toys"+"&sp_cs=UTF-8&xrm=recipients"; 
            flag2 = true;
            frame2_link += itemStr;
        }
        else if (itemStr === "learn") {
            flag2 = true;
            frame2_link += itemStr;
            flag1 = true;
            frame1_link += itemStr;
            urlMacy = "educational+toys";
            frame3_link += "educational toys&sp_cs=UTF-8&xrm=recipients";
        }
        else if (itemStr === "soundtoy") {
            itemStr = "sound toys";
            urlMacy = "musical+toys";
            frame3_link += itemStr +"&sp_cs=UTF-8&xrm=recipients";
            frame1_link += itemStr;
            frame2_link += itemStr;
            flag2 = true;
        }
        else {
            frame3_link += "toys" +"&sp_cs=UTF-8&xrm=recipients";
            frame1_link += "toys";
            frame2_link += "toys";
        }

    }

    else if(items["final1"].toLowerCase() === "books") {
        urlStr ="books";
        itemStr = items["final2"].toLowerCase();
        itemStr = itemStr.replace(/\s/g, "+");
        if(items["final2"].toLowerCase() === "cookbook") {
            urlStr = items["final2"].toLowerCase();
            urlMacy = "cookbook";
        }
        else {
            urlStr = itemStr + urlStr;
            flagMacy = true;
        }

        //fiction
        if (itemStr === "sci-fi") {
            frame1_link += "fiction books";
            frame3_link += "science books"+"&sp_cs=UTF-8&xrm=recipients";
            frame2_link += itemStr;
            //hide 2
            flag2 = true;   
        }
        else if (itemStr === "action") {
            frame1_link += "adventure books";
            frame3_link += "adventure books"+"&sp_cs=UTF-8&xrm=recipients";
            frame2_link += itemStr; 
            //hide 2
            flag2 = true;        

        }
        else if (itemStr === "romance") {
            frame2_link += itemStr;
            frame1_link += itemStr;
            flag1 = true;
            flag2 = true;
            frame3_link += "romance books"+"&sp_cs=UTF-8&xrm=recipients";

        }
        else if (itemStr === "health") {
            flag3 = true;
            flag1 = true;
            frame3_link += "health books"+"&sp_cs=UTF-8&xrm=recipients";
            frame1_link += itemStr;

            frame2_link += "health books";

        }
        else if (itemStr === "mystery") {
            //hide 2 & 3
            flag2 = true;
            flag3 = true;
            frame3_link += itemStr+"&sp_cs=UTF-8&xrm=recipients";
            frame2_link += itemStr;

            frame1_link += "mystery books";

        }
        else if (itemStr ==="children's" ) {
            //hide 1
            flag1 = true;
            frame1_link += itemStr;

            frame3_link += "children books"+"&sp_cs=UTF-8&xrm=recipients";
            frame2_link += "children books";

        }
        else if (itemStr === "religion") {
            frame2_link += "religious books";
            flag1 = true;
            frame1_link += itemStr;

           flag3 = true;
            frame3_link += itemStr +"&sp_cs=UTF-8&xrm=recipients";


        }
        else if (itemStr === "comics") {
            //hide 2
            frame3_link += "comics"+"&sp_cs=UTF-8&xrm=recipients";
            frame1_link += "comics";
            flag2 = true;
            frame2_link += itemStr;

        }
        else if (itemStr === "cookbook") {
            frame3_link += "cookbooks"+"&sp_cs=UTF-8&xrm=recipients";
            frame1_link += "cookbooks";
            frame2_link += "cookbooks";
        }
        
        else{
            frame3_link += "books"+"&sp_cs=UTF-8&xrm=recipients";
            frame1_link += "books";
            frame2_link += "books";
        }

    }

    else if(items["final1"].toLowerCase() === "stroller") {
        urlStr = items["final1"].toLowerCase();
        urlMacy = "stroller";
        
        frame3_link += "strollers"+"&sp_cs=UTF-8&xrm=recipients";
        frame1_link += "strollers";
        flag2 = true;
        frame2_link += "strollers";
        flag1 = true;
        flag3 = true;
    }

    else if(items["final1"].toLowerCase() === "greeting") {
        urlStr = "greeting+cards";
        urlMacy = urlStr;
        frame2_link += "greeting cards";
        flag2 = true;

        frame1_link += "greeting cards";
        frame3_link += "greeting cards"+"&sp_cs=UTF-8&xrm=recipients";

    }

    else if(items["final1"].toLowerCase() === "food") {
        urlStr = items["final2"].toLowerCase();
        urlMacy = urlStr;
        frame3_link += urlStr+"&sp_cs=UTF-8&xrm=recipients";
        frame2_link += urlStr;
        frame1_link +=  urlStr;

    }

    else if(items["final1"].toLowerCase() === "chocolates") {
        urlStr = items["final1"].toLowerCase();
        urlMacy = urlStr;
        frame3_link += "chocolates"+"&sp_cs=UTF-8&xrm=recipients";
        frame2_link += "chocolates";
        frame1_link +=  "chocolates";

    }

    else if(items["final1"].toLowerCase() === "bouquet") {
        urlStr = items["final1"].toLowerCase();
        urlMacy = urlStr;
        frame3_link += "bouquets"+"&sp_cs=UTF-8&xrm=recipients";
        frame2_link += "bouquets";
        frame1_link +=  "bouquets";
    }

    else if(items["final1"].toLowerCase() === "jewellery") {
        urlStr = items["final2"].toLowerCase();
        urlMacy = urlStr;
        frame3_link += urlStr+"&sp_cs=UTF-8&xrm=recipients";
        frame2_link += urlStr;
        frame1_link +=  urlStr;
        if (urlStr === "anklet") {
        flag1 = true;
        flag2 = true;
        flag3 = true;
        }
    }

    else if(items["final1"].toLowerCase() === "accessories") {
        urlStr = addStr(age,gender);
        urlStr = items["final2"].toLowerCase()+urlStr;
        urlMacy = urlStr;
        option2 = items["final2"].toLowerCase();
        if (gender === "m") {
            
            frame3_link += option2+"&q1=men&sp_cs=UTF-8&x1=recipients&xrm=recipients";
            //+final2+"&q1=men&sp_cs=UTF-8&x1=recipients&xrm=recipients";
        }
        else
        {
            frame3_link += option2+"&q1=women&sp_cs=UTF-8&x1=recipients&xrm=recipients";
        }
        frame1_link += option2;
        frame2_link += option2;
    }

    else if(items["final1"].toLowerCase() === "electronics") {
        itemStr = items["final2"].toLowerCase();
        itemStr = itemStr.replace(/\s/g, "+");
        urlStr = itemStr;
        urlMacy = "electronics";
        frame1_link += "electronics";
        frame2_link += "electronics";
        frame3_link += "electronics"+"&sp_cs=UTF-8&xrm=recipients";
        flag3 = true;
    }

    else if(items["final1"].toLowerCase() === "giftcards") {
        urlStr = "gift+cards";
        urlMacy = urlStr;
        itemStr = urlStr;
        frame1_link += itemStr;
        frame2_link += itemStr;
        frame3_link += itemStr+"&sp_cs=UTF-8&xrm=recipients";
    }

    else if(items["final1"].toLowerCase() === "cosmetics") {
        urlStr = items["final1"].toLowerCase();
        itemStr = urlStr;
        urlMacy = items["final2"].toLowerCase();
        frame1_link += itemStr;
        frame2_link += itemStr;
        frame3_link += itemStr+"&sp_cs=UTF-8&xrm=recipients";
        if (itemStr === "eyeshadow") {
            frame1_link += "eye shadow";
            frame2_link += "eye shadow";
            frame3_link += itemStr+"&sp_cs=UTF-8&xrm=recipients";
            flag3 = true;    
        }
        else if (itemStr === "mascara" || itemStr === "foundation" || itemStr === "blush"|| itemStr === "cream") {
            flag1 = true;
            flag2 = true;
            flag3 = true;
        }
        else if (itemStr === "lipstick") {
            frame1_link += itemStr;
            frame2_link += itemStr;
            flag2 = true;
            frame3_link += itemStr+"&sp_cs=UTF-8&xrm=recipients";
        }
        else if (itemStr === "perfume") {
            frame1_link += itemStr;
            frame2_link += itemStr;
            frame3_link += itemStr+"&sp_cs=UTF-8&xrm=recipients";

        }       
        
    
    }

    else if(items["final1"].toLowerCase() === "collectible") {
        urlStr = items["final1"].toLowerCase();
        itemStr = urlStr;
        urlMacy = urlStr;
        frame1_link += itemStr;
        frame2_link += itemStr;
        frame3_link += itemStr+"&sp_cs=UTF-8&xrm=recipients";
        flag2 = true;

    }

    urlMacy = "http://www1.macys.com/shop/search/Price/"+minCost+"%257C"+maxCost+"?keyword="+urlMacy;

    urlStr = "http://www.amazon.com/s?field-keywords="+urlStr;
    urlStr = urlStr + "&field-price="+minCostAm+"-"+maxCostAm;

}

window.onload = function() {
    //document.getElementById("submit").onclick = callhtml;
    callhtml();
}
