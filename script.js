
function toonTafel() 
{
    let tafelvan = document.getElementById("inputTafel").value;
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
    let tafelvan = document.getElementById("leertafel").value;
    let factor = Math.floor(Math.random() * 10) + 1;
    let uitkomst = tafelvan * factor;
    let antwoord ="Wat is " + tafelvan + " x " + factor + "?";
    document.getElementById("outputleertafel").innerHTML = antwoord;
}