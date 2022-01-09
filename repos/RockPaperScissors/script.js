const playArray = [0,1,2];

//Key:
// Rock = 0
// Paper = 1
// Scissors = 2

let playerScore = 0;
let gameRound = 0;

function playGame(gameResults) { //pulls computer and player choices to prepare for 1 match
    var computerSelection = playArray[Math.floor(Math.random()*3)]; //computer chooses randomly 1 of the 3 choices (numeric value)
    var playerSelection = playerConversion(); 
    function playerConversion() { //this converts the player's word choice to a numeric value per above key
        var playerInput = prompt("Choose: Rock, Paper, or Scissors").toLowerCase(); //player writes choice, converts to lowercase
        if (playerInput == "rock") { //converts player choice to numeric value
            return 0;
        } else if (playerInput == "paper") {
            return 1;
        } else if (playerInput == "scissors") {
            return 2;
        } else {
            //to register non-choices
        };
        
    };

    function computerInEnglish(computerSelection) {
        if (computerSelection === 0) {
            return "rock";
        } else if (computerSelection === 1) {
            return "paper";
        } else {
            return "scissors";
        };
    };
    var computerChoiceEnglish = computerInEnglish(computerSelection)

    function playerInEnglish(playerSelection) {
        if (playerSelection === 0) {
            return "rock";
        } else if (playerSelection === 1) {
            return "paper";
        } else {
            return "scissors";
        };
    };
    var playerChoiceEnglish = playerInEnglish(playerSelection)

    var gameResults = computerSelection-playerSelection; //calculates whether the player won (-1, 2), tied (0), or lost
    if (gameResults == 0) { //tie
        console.log("It's a tie, rematch!");
    } else if (gameResults === 2) { //player wins (scissor v. rock)
        playerScore++;
        gameRound++;
        console.log("Round " + gameRound + ": Computer's " + computerChoiceEnglish + " vs player's " + playerChoiceEnglish + ". Player wins! Player score: " + playerScore);
    } else if (gameResults === -1) { //player wins (paper v scissor OR rock v paper)
        playerScore++;
        gameRound++;
        console.log("Round " + gameRound + ": Computer's " + computerChoiceEnglish + " vs player's " + playerChoiceEnglish + ". Player Wins! Player score: " + playerScore);
    } else if (gameResults === 1) { //player loses (scissor v paper OR paper v rock)
        gameRound++;
        console.log("Round " + gameRound + ": Computer's " + computerChoiceEnglish + " vs player's " + playerChoiceEnglish + ". Computer wins. Player score: " + playerScore);
    } else if (gameResults === -2) {//player loses (rock v scissor)
        gameRound++;
        console.log("Round " + gameRound + ": Computer's " + computerChoiceEnglish + " vs player's " + playerChoiceEnglish + ". Computer wins. Player score: " + playerScore);
    } else {
        console.log("You've submitted an impossible answer.") //if user submits a non-choice, this is the result. no rounds added.
    }
};

function game() { //Will play for 5 win/loss rounds. Ties and errors do not count.
    do {
        playGame();
     } while (gameRound < 5);
    
};

game();