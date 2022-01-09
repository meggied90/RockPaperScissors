const playArray = [0,1,2];

//Key:
// Rock = 0
// Paper = 1
// Scissors = 2

function computerChooses() {
    return playArray[Math.floor(Math.random()*3)];
};

let playerInput = prompt("Choose: Rock, Paper, or Scissors"); //this doesnt account for bad entries, need to fix that
let playerWordChoice = playerInput.toLowerCase();


function playerChoiceToValue() {
    if (playerWordChoice === "rock") {
        return 0;
    } else if (playerWordChoice === "paper") {
        return 1;
    } else {
        return 2;
    };
};

let playerScore = 0
let gameRound = 0
let playerSelection = playerChoiceToValue();

function playGame(gameResults) {
    var computerSelection = computerChooses();
    //calculates whether the player won (-1, 2), tied (0), or lost
    var gameResults = computerSelection-playerSelection;
    if (gameResults = 0) {
        console.log("It's a tie, rematch!");
    } else if ((gameResults = -1) || (gameResults = 2)) {
        playerScore++
        gameRound++
        console.log("Round: " + gameRound + ": Computer: " + computerSelection + " vs Player: " + playerSelection + ". Player score: " + playerScore);
    } else {
        console.log("Round: " + gameRound + ": Computer: " + computerSelection + " vs Player: " + playerSelection + ". Player score: " + playerScore);
        gameRound++;
    };
};

function game() {
    do {
        playGame();
        computerChooses();
     } while (gameRound < 5);
    
};

game();
