// Store current user & computer play 
var computerPlay = "";
var userPlay = "";

var userScore = 0;
var computerScore = 0;

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

//Restart game on restart button press
RestartBtn.addEventListener("click", function() {
    location.reload();
})

//Disables the buttons
function disableButtons() {
    RockBtn.disabled = true;
    PaperBtn.disabled = true;
    ScissorsBtn.disabled = true;
}

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
        }else{
            draw();
        }
    }
    else if(userPlay == "Paper"){
        if(computerPlay == "Rock"){
            userWinsRound();
        }
        else if(computerPlay == "Scissors"){
            computerWinsRound();
        }else{
            draw();
        }
    }
    else if(userPlay == "Scissors"){
        if(computerPlay == "Paper"){
            userWinsRound();
        }
        else if(computerPlay == "Rock"){
            computerWinsRound();
        }else{
            draw();
        }
    }

    if(userScore > 4 || computerScore > 4){
        endGame();
    }
}

//If computer wins round
function computerWinsRound() {
    titlePlay.innerHTML = "You chose " + userPlay + ", Computer chose " + computerPlay + ", Computer wins this round!";
    computerScore++; 
    displayComputerScore.innerHTML = computerScore;
}

//If user wins round
function userWinsRound() {
    titlePlay.innerHTML = "You chose " + userPlay + ", Computer chose " + computerPlay + ", You win this round!";
    userScore++;
    displayUserScore.innerHTML = userScore;
}

//If draw
function draw() {
    titlePlay.innerHTML = "You both chose " + userPlay + " this rounds a draw! No points awarded";
}

//Ends game
function endGame() {
    disableButtons();
    if(userScore > computerScore) {
        titlePlay.innerHTML = "You won the game! Press the restart button to play again!";
    }else{
        titlePlay.innerHTML = "You lost the game! Press the restart button to play again!";
    }
    RestartBtn.classList.toggle("restart-button-hide");
}

