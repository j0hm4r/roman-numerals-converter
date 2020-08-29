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
    let val = this.getAttribute("value");
    if (numArr.length == 0) {
        clearScreen();
    }
    numArr.push(val);
    clearScreen();
    lineIn.innerHTML = numArr.join("");
}

function deleteLast(e) {
    if (numArr.length > 0) {
        numArr.pop();
        clearScreen();
        lineIn.innerHTML = numArr.join("");
    }
}

function clearScreen(e) {
    lineIn.innerHTML = "";
    lineOut.innerHTML = "";
    // numArr = [];
}

function validate() {
    let num = parseInt(numArr.join(""));
    let result = "";
    if (num == "NaN") {
        return "Not a number"
    } else if (num <= numMin) {
        return "Number too small";
    } else if (num > numMax) {
        return "Number too large"
    } else {
        return num;
    }
}

function romanize(e) {
    let result = validate(); 
    let output = "";
    if (Number.isInteger(result)) {
        output = convertToRoman(result);
    } else {
        output = result;
    }
    lineOut.innerHTML = output; 
    numArr = [];
}

function addListeners() {
    let tags = document.getElementsByTagName("BUTTON");
    for (let i = 0; i < tags.length; i++) {
        if (/^\d$/.test(tags[i].getAttribute("value"))) {
            tags[i].addEventListener("click", addNumber);
        } else if (tags[i].getAttribute("value") == "c") {
            tags[i].addEventListener("click", clearScreen);
        } else if (tags[i].getAttribute("value") == "bs") {
            tags[i].addEventListener("click", deleteLast);
        } else if (tags[i].getAttribute("value") == "romanize"){
            tags[i].addEventListener("click", romanize);
        }
    }
}

if ((typeof window === 'undefined') || (typeof process === 'object')) {
    // in node for testing
    var numArr = [];
    var numMin = 0; // excl
    var numMax = 3999; // incl
    module.exports = convertToRoman;
} else {
    // in browser
    var numArr = [];
    var lineIn = document.getElementById("lineIn");
    var lineOut = document.getElementById("lineOut");
    var numMin = 0; // excl
    var numMax = 3999; // incl
    addListeners();
}
