let inputTafelObj = document.getElementById("inputTafel");
let outputTafelObj = document.getElementById("outputTafel");


let leertafelinpObj = document.getElementById("leertafel");
let antwoefentafelinpObj = document.getElementById("antwoefentafel");
let opgavetafeloutpObj = document.getElementById("outputleertafel");
let controleertafeloutpObj = document.getElementById("outputcontroleer");

function toonTafel() 
{
    let tafelvan = inputTafelObj.value;
    let teller = 1;
    let output = "";
    let uitkomst = 0;
    while (teller <= 21) {
        uitkomst = teller * tafelvan;
        output += teller + " x " + tafelvan + " = " + uitkomst + "<br>";
        teller++;
    }
    document.getElementById("outputTafel").innerHTML = output;
    // alert("hij doet het" + tafelvan);

} 
function leertafel()
{
    let tafelvan = leertafelinpObj.value;
    let factor = Math.floor(Math.random() * 10) + 1;
    let uitkomst = tafelvan * factor;
    let som ="Wat is " + tafelvan + " x " + factor + "?";
    opgavetafeloutpObj.innerHTML = som;
} 
     
function toonOpgave()
{
    let output = "";
    let getal = Math.floor(Math.random()*6) + 1;
    output = getal + " x " + oefentafelinpObj.value + " = ";
    oefentafeloutpObj.innerHTML = output;
}
function controleerAntwoord()
{
    let antw = antwoefentafelinpObj.value;
    let berekend_antw = 0
    alert ("antwoord = " + antw);
}