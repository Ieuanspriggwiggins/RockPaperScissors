// Store current user & computer play 
var computerPlay = "";
var userPlay = "";

//Reference for title play and current scores
var titlePlay = document.getElementById("play-title");
var displayUserScore = document.getElementById("player-score");
var displayComputerScore = document.getElementById("computer-score");

// References to buttons
var RockBtn = document.getElementById("rockbtn");
var PaperBtn = document.getElementById("paperbtn");
var ScissorsBtn = document.getElementById("scissorsbtn");
var RestartBtn = document.getElementById("restartbtn");

//Toggles the class to hide restart button at beginning of game
RestartBtn.classList.toggle("restart-button-hide");

//Event listeners for buttons
RockBtn.addEventListener("click", function() {
    userPlay = "Rock";
    makePlay();
});
PaperBtn.addEventListener("click", function() {
    userPlay = "Paper";
    makePlay();
})
ScissorsBtn.addEventListener("click", function() {
    userPlay = "Scissors";
    makePlay();
})

//Generates computer choice
function generateComputerGuess() {
    var x = Math.floor((Math.random() * 3)+1);
    switch(x){
        case 1:
            computerPlay = "Rock";
            break;
        case 2:
            computerPlay = "Paper";
            break;
        case 3:
            computerPlay = "Scissors";
            break;        
    }
}

//Processes the users play
function makePlay() {
    generateComputerGuess();
    if(userPlay == "Rock"){
        if(computerPlay == "Paper"){
            computerWinsRound();
        }
        else if(computerPlay == "Scissors"){
            userWinsRound();
        }
    }
}

//If computer wins round
function computerWinsRound() {

}

//If user wins round
function userWinsRound() {

}

//If draw
function draw() {
    
}

