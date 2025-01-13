let souradniceX = document.getElementById("souradniceX");
let souradniceY = document.getElementById("souradniceY");
let zjistit = document.getElementById("zjistit");
let vysledek = document.getElementById("vysledek");

vysledek.style.display = "none";

zjistit.onclick = function() {

console.log(typeof(souradniceY.valueAsNumber))
console.log(souradniceY.valueAsNumber)


if ( souradniceY.valueAsNumber <50 || souradniceX.valueAsNumber < 50){
   vysledek.src = "green.png"
}
else {
  vysledek.src = "red.jpg"
}

vysledek.style.display = "";
}