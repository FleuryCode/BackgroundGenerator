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