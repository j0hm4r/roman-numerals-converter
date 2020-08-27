function convertToRoman(num) {
    let dict = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
    let roman = "";
    for (let key in dict) {
        while (num >= dict[key]) {
            roman += key;
            num -= dict[key];
        }
    }
    return roman;
}

function addNumber(e) {
    //alert(this.getAttribute("value"));
    let el = document.getElementById("line2");
    el.innerHTML = this.getAttribute("value");
}

function deleteLast(e) {
    alert(this.getAttribute("value"));
}

function clearScreen(e) {
    alert(this.getAttribute("value"));
}

function addListeners() {
    let tags = document.getElementsByTagName("BUTTON");
    for (let i = 0; i < tags.length; i++) {
        if (/^\d{1}$/.test(tags[i].getAttribute("value"))) {
            tags[i].addEventListener("click", addNumber);
        } else if (tags[i].getAttribute("value") == "c") {
            tags[i].addEventListener("click", deleteLast);
        } else if (tags[i].getAttribute("value") == "bs") {
            tags[i].addEventListener("click", clearScreen);
        } else if (tags[i].getAttribute("value") == "romanize"){
            tags[i].addEventListener("click", convertToRoman);
        }
    }
alert(parseInt(5) + " | " + parseInt("vijf") + " | " + parseInt(5.678));
alert(Number.isInteger(5) + " | " + Number.isInteger("5") + " | " + Number.isInteger(5.678));
}

if ((typeof window === 'undefined') || (typeof process === 'object')) {
    // this is node
    console.log("NODE!!!!");
} else {
    // browser
    alert("BROWSER");
    addListeners();
}


// this is also node
   
   console.log("2 = " + convertToRoman(2));
   console.log("3 = " + convertToRoman(3));
   console.log("4 = " + convertToRoman(4));
   console.log("5 = " + convertToRoman(5));
   console.log("9 = " + convertToRoman(9));
   console.log("12 = " + convertToRoman(12));
   console.log("16 = " + convertToRoman(16));
   console.log("29 = " + convertToRoman(29));
   console.log("44 = " + convertToRoman(44));
   console.log("45 = " + convertToRoman(45));
   console.log("68 = " + convertToRoman(68));
   console.log("83 = " + convertToRoman(83));
   console.log("97 = " + convertToRoman(97));
   console.log("99 = " + convertToRoman(99));
   console.log("400 = " + convertToRoman(400));
   console.log("500 = " + convertToRoman(500));
   console.log("501 = " + convertToRoman(501));
   console.log("649 = " + convertToRoman(649));
   console.log("798 = " + convertToRoman(798));
   console.log("891 = " + convertToRoman(891));
   console.log("1000 = " + convertToRoman(1000));
   console.log("1004 = " + convertToRoman(1004));
   console.log("1006 = " + convertToRoman(1006));
   console.log("1023 = " + convertToRoman(1023));
   console.log("2014 = " + convertToRoman(2014));
   console.log("3999 = " + convertToRoman(3999));
   