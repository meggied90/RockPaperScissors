//still I still want to do but I think will be a TOP instruction later:
//five round limit and congratulate/console the player

const playArray = ["rock","paper","scissors"];
let computerSelection = playArray[Math.floor(Math.random()*3)];  
let playerSelection = ""

document.getElementById("rock").addEventListener("click",function(){
    playerSelection = "rock";
    playGame();
})
document.getElementById("paper").addEventListener("click",function(){
    playerSelection = "paper";
    playGame();
})
document.getElementById("scissors").addEventListener("click",function(){
    playerSelection = "scissors";
    playGame();
})


function promptComputer() { //to reroll the computer's choice after the 1st game
    computerSelection = playArray[Math.floor(Math.random()*3)];
}   

let playerScore = 0;
let computerScore = 0;
let gameRound = 0;

document.getElementById("rounds").innerHTML = "Round: " + gameRound;

function playGame() { 

    if ((computerSelection == "rock" && playerSelection == "scissors") || 
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")) {
        computerWins();
    } else if (computerSelection == playerSelection) {
        nobodyWins();
        promptComputer();
    } else {
        playerWins();
    }
}

function computerWins () {
    removeTransition()
    loseArray = ["Maybe " + playerSelection + " is bad luck...","You'll get him next time!","Drat! How did we not see that coming?","Oops. That one was a freebie ...right?"]
    let loseResponse = loseArray[Math.floor(Math.random()*loseArray.length)];

    removeResults();

    let results = document.createElement('p')
    results.classList.add("results");
    results.textContent = loseResponse;

    outcome.appendChild(results);

    gameRound++;
    computerScore++;
    document.getElementById("computerScore").innerHTML = document.getElementById("computerScore").innerHTML.replace(computerScore -1 ,computerScore);
    document.getElementById("computerScore").classList.add('winner')
    promptComputer();
    updateRound();
}

function playerWins () {
    removeTransition()
    winArray = ["Good thing the computer chose " + computerSelection + "!","Ha, you got him this time!","Victory has never tasted so sweet.","Take that, stupid computer!","Man, it feels good to be a ganster."]
    let winResponse = winArray[Math.floor(Math.random()*winArray.length)];

    removeResults();
    
    let results = document.createElement('p')
    results.classList.add("results");
    results.textContent = winResponse;

    outcome.appendChild(results);
    
    gameRound++;
    playerScore++;
    document.getElementById("playerScore").innerHTML = document.getElementById("playerScore").innerHTML.replace(playerScore -1 ,playerScore);
    document.getElementById("playerScore").classList.add('winner')
    promptComputer();
    updateRound();
}

function nobodyWins () {
    removeTransition()
    tieArray = ["Oops, a tie!","A tie, try again.","You both chose the same weapon!","It's a draw, try again","Like my shoes, you are tied!","Bummer, a tie. You'll get him next time!"]
    let tieResponse = tieArray[Math.floor(Math.random()*tieArray.length)];
    
    removeResults();
    
    let results = document.createElement('p')
    results.classList.add("results");
    results.textContent = tieResponse;

    outcome.appendChild(results);
}

function updateRound() {
    document.getElementById("rounds").innerHTML = document.getElementById("rounds").innerHTML.replace(gameRound -1 ,gameRound);
}
let removeResults = () => outcome.removeChild(outcome.firstElementChild)

// function game() { //Will play for 5 win/loss rounds. Ties and errors do not count.
//     do {
//         playGame();
//      } while (gameRound <= 5);
    
// };

// game();

function removeTransition() {
    if (document.querySelector(".winner") != null) {
        document.querySelector(".winner").classList.remove('winner');
    }
}
