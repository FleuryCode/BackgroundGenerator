var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer', _.without(array, 3));


var colorInfo = document.getElementById("colorInfo");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("mainBody");

function changeGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    colorInfo.textContent = body.style.background + ";";
}

color1.addEventListener("input", changeGradient);

color2.addEventListener("input", changeGradient);