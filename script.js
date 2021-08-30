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
    
}

//Processes the users play
function makePlay() {

}

