var colorInfo = document.getElementById("colorInfo");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("mainBody");

function changeGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

function updateColorInfo() {
    colorInfo.innerHTML = color1.value + " - " + color2.value;
}

color1.addEventListener("input", function() {
    changeGradient();
    updateColorInfo();
});

color2.addEventListener("input", function() {
    changeGradient();
    updateColorInfo();
});