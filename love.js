// LOVE kalkulator


function subButton() {
    var n = Math.random();
    n = n * 100;
    n = Math.floor(n) + 1;

    var navn1 = document.getElementById('name');
    var navn2 = document.getElementById('name2');
    
    var navn11 = navn1.value;
    var navn22 = navn2.value;
    navn11 = navn11.toUpperCase();
    navn22 = navn22.toUpperCase();
    var score = navn11 + " og " + navn22 + " passer " + n + "% sammen!";
    
    document.getElementById("res1").innerHTML = score;
    document.getElementById('pros').innerHTML = n + "%";
    
}


document.querySelector("button").addEventListener("click", subButton);











