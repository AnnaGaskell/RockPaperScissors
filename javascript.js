
let playerChoice;
let computerChoice;

function playerPlay(){
  
    playerChoice = prompt("Rock, Paper, Scissors?").toLowerCase();
    
    if 
    (playerChoice == "rock" ||
    playerChoice == "paper" ||
    playerChoice == "scissors")
    
    {
    return playerChoice;

    } else {
      alert("That is not a valid choice.");
    }
  
}
// console.log(playerPlay(playerChoice));

function computerPlay(){     
    
    const choices = ["rock", "paper", "scissors"];
    computerChoice = choices[Math.floor(Math.random()*choices.length)]

    return computerChoice;
    
}
// console.log(computerPlay(computerChoice));

let playerSelection;
let computerSelection;
playerSelection = playerPlay();
computerSelection = computerPlay();

let playerScore = 0;
let computerScore = 0;

let roundWinner

let playerRound = "Player Wins this Round"
let computerRound = "Computer Wins this Round"
let drawRound = " Tie Round"

function playRound(playerSelection, computerSelection) {

    if
        (computerSelection === playerSelection) 
        {
        console.log("Tie Round")
        return drawRound;
        
        }

    else if
        ((playerSelection === "rock" && computerSelection === "paper") || 
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "scissors"))
                
        {
        roundWinner = computerSelection;
        computerScore++;
        console.log("You Lost this Round.");
        return playerRound ;
        }   

    else 
        ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) 
            
        {
        roundWinner = playerSelection;
        playerScore++;
        console.log("You Win this Round.");
        return computerRound;
        }
}


// console.log(playRound(playerSelection,computerSelection))


function game (playRound) {
   
     for (let i=0; i<10; i++) {
        
        if (playerScore === 5) {
            console.log("You Won the Game");
    
        } else (computerScore === 5); {
            console.log ("You Lost the Game");   
        }
        return;
        
     
    }
}

console.log(game(playRound));

