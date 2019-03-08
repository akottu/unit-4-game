var numberToGuess = 0;
var currentScore = 0;

var redButtonValue = 0;
var orangeButtonValue = 0;
var yellowButtonValue = 0;
var greenButtonValue = 0;
var blueButtonValue = 0;
var purpleButtonValue = 0;


var wins = 0;
var losses = 0;

$("#red-button").text("<p>redButtonValue<p>");

start();

function initializeButtonValues() {

    redButtonValue = Math.floor(Math.random() * 20);
    orangeButtonValue = Math.floor(Math.random() * 20);
    yellowButtonValue = Math.floor(Math.random() * 20);
    greenButtonValue = Math.floor(Math.random() * 20);
    blueButtonValue = Math.floor(Math.random() * 20);
    purpleButtonValue = Math.floor(Math.random() * 20);

    $("#red-button").text(redButtonValue.toString());
    $("#orange-button").text(orangeButtonValue.toString());
    $("#yellow-button").text(yellowButtonValue.toString());
    $("#green-button").text(greenButtonValue.toString());
    $("#blue-button").text(blueButtonValue.toString());
    $("#purple-button").text(purpleButtonValue.toString());

}

$("button").click(function() {
    currentScore += this;
    $(this).text(currentScore);

    if(currentScore === numberToGuess) {
        win();
    }
    else if(currentScore > numberToGuess) {
        lose();
    }
})


function start() {
    numberToGuess = Math.floor(Math.random() * 130 + 20);
    currentScore = 0;
    $("#goal-display").text(numberToGuess.toString());
    $("#current-score-display").text(currentScore.toString());
    initializeButtonValues();
}

function win() {
    alert("You win!");
    wins++;
    $("#wins-display").text(wins);
    start();
}

function lose() {
    alert("You lose!");
    losses++;
    $("#losses-display").text(wins);
    start();
}