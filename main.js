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
player1name = localStorage.getItem("Player 1");
player2name = localStorage.getItem("Player 2");
player1score = 0;
player2score = 0;

document.getElementById("player1name").innerHTML = player1name + " : ";
document.getElementById("player2name").innerHTML = player2name + " : ";
document.getElementById("player1score").innerHTML = player1score;
document.getElementById("player2score").innerHTML = player2score;
document.getElementById("playerQ").innerHTML = "Question Turn : " + player1name;
document.getElementById("playerA").innerHTML = "Answer Turn : " + player2name;

question_turn = "player1";
answer_turn = "player2";
function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    
    question_number = "<h4>" + number1 + "  X  " + number2+ "<h4>";
    input_box = "<br>Answer :  <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = question_number + input_box + check_button;
   
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
function check(){
    get_answer = document.getElementById("input_check_box").value;
    if (get_answer = actual_answer){
        if (answer_turn = "player1") {
            update_player1_score = player1score + 1;
            document.getElementById("player1score").innerHTML = update_player1_score;
        }else{
            update_player2_score = player2score + 1;
            document.getElementById("player2score").innerHTML = update_player2_score;
        }
    }
    if (question_turn = "player1") {
        question_turn = "player2";
        document.getElementById("playerQ").innerHTML = "Question Turn : " + player2name;
    }else{
        question_turn = "player1";
        document.getElementById("playerQ").innerHTML = "Question Turn : " + player1name;
    }

    if (answer_turn = "player1") {
        answer_turn = "player2";
        document.getElementById("playerA").innerHTML = "Answer Turn : " + player2name;
    }else{
        answer_turn = "player1";
        document.getElementById("playerA").innerHTML = "Answer Turn : " + player1name;
    }
}