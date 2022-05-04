var player1;
var player2;

function addUser(){
    player1 = document.getElementById("Input1").value;
    console.log(player1);
    player2 = document.getElementById("Input2").value;
    console.log(player2);
    localStorage.setItem("Player 1", player1);
    localStorage.setItem("Player 2", player2);
    window.location = "Quiz.html";
}