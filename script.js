const playArray = ["rock","paper","scissors"];
let computerSelection = playArray[Math.floor(Math.random()*3)]; //computer chooses randomly 1 of the 3 choices 
let playerSelection = ""
function promptPlayer() {
    playerSelection = prompt("Choose: Rock, Paper, or Scissors").toLowerCase();//player writes choice, converts to lowercase
}

function promptComputer() { //to reroll the computer's choice after the 1st game
    computerSelection = playArray[Math.floor(Math.random()*3)];
}   

let playerScore = 0;
let computerScore = 0;
let gameRound = 1;

promptPlayer();

//If an invalid choice was made, we need to ask them to choose again
if (playerSelection.indexOf(playArray) >= 0) {
    playGame();
} else {
    playerSelection = alert("That was not a valid choice.");
    promptPlayer();
};

function playGame() { //if the computer wins +1 to computer, else +1 to player
    if ((computerSelection == "rock" && playerSelection == "scissors") || 
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")) {
        computerScore++
        console.log("Round " + gameRound + ": Computer's " + computerSelection + " vs player's " + playerSelection + ". Computer wins. Player score: " + playerScore);
        gameRound++
        promptPlayer();
        promptComputer();
    } else if (computerSelection == playerSelection) {
        console.log("A tie, try again!");
        promptPlayer();
        promptComputer();
    } else {
        playerScore++
        console.log("Round " + gameRound + ": Computer's " + computerSelection + " vs player's " + playerSelection + ". Player wins! Player score: " + playerScore);
        gameRound++
        promptPlayer();
        promptComputer();
    }
}

function game() { //Will play for 5 win/loss rounds. Ties and errors do not count.
    do {
        playGame();
     } while (gameRound <= 5);
    
};

game();