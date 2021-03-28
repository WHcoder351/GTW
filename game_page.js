player1 = localStorage.getItem("player1");
player2 = localStorage.getItem("player2");
ps1 = 0;
ps2 = 0;
document.getElementById("player1").innerHTML = player1 + " : ";
document.getElementById("player2").innerHTML = player2 + " : ";
document.getElementById("ps1").innerHTML = ps1;
document.getElementById("ps2").innerHTML = ps2;
document.getElementById("Qt").innerHTML = "Question Turn -" + player1;
document.getElementById("At").innerHTML = "Answer Turn -" + player2;

function S() {
    gW = document.getElementById("word").value;
    word = gW.toLowerCase();
    console.log("word in lowercase =" + word);
    Ca1 = word.charAt(1);
    console.log(Ca1);
    lD2 = Math.floor(word.length / 2);
    Ca2 = word.charAt(lD2);
    console.log(Ca2);
    lM1 = word.length - 1;
    Ca3 = word.charAt(lD2);
    console.log(Ca3);
    removeCa1 = word.replace(Ca1, "_");
    removeCa2 = removeCa1.replace(Ca2, "_");
    removeCa3 = removeCa2.replace(Ca3, "_");
    console.log(removeCa3);
    qW = "<h4 id = 'word_display'> Q)" + removeCa3 + "</h4>";
    inputVar = "<br>Answer : <input type='text' id ='ICB'>"
    Check = "<br><br><button class = 'btn btn-danger' onclick ='check()'>Check</button>"
    row = qW + inputVar + Check;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
Qt = "player1";
At = "player2";

function check() {
    Were = document.getElementById("ICB").value;
    answer = Were.toLowerCase();
    console.log("Lowercase Word is" + answer);
    if (word == answer) {
        if (At == "player1") {
            ps1 = ps1 + 1;
            document.getElementById("ps1").innerHTML = ps1;
        } else {
            ps2 = ps2 + 1;
            document.getElementById("ps2").innerHTML = ps2;
        }
    }
    if (Qt == "player1") {
        Qt = "player2";
        document.getElementById("Qt").innerHTML = "Question Turn =" + player2;
    } else {
        Qt = "player1";
        document.getElementById("Qt").innerHTML = "Question Turn =" + player1;
    }
    if (At == "player1") {
        At = "player2";
        document.getElementById("At").innerHTML = "Answer Turn =" + player2;
    } else {
        At = "player1";
        document.getElementById("At").innerHTML = "Answer Turn =" + player1;
    }
    document.getElementById("output").innerHTML = "";
}