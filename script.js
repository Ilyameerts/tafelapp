
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