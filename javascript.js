function computerPlay(){     
    
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random()*choices.length)]

    return computerChoice;
    
}

let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection) {

    playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();
    computerSelection = computerPlay();
    
    if
        (computerSelection === playerSelection) 
        {
        let result = ("Tie Round");
        return result;
        }

    else if
        ((playerSelection === "rock" && computerSelection === "paper") || 
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "scissors"))
                
        {
        computerScore++;
        let result = "You Lost this Round.";
        return result;
        }   

    else 
        ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) 
            
        {
        playerScore++;
        let result = "You Win this Round.";
        return result;
        }
    

}

// console.log(playRound(playerSelection,computerSelection))

 function endGame () {

    if (playerScore > computerScore) {
        console.log("You Won the Game");

    } else (computerScore > playerScore); {
        console.log ("You Lost the Game");   
    }
 }

function game () {
    console.log(playRound());
    if(playerScore < 5 && computerScore < 5){
    	game();
    }
    else{
    	endGame();
    }
   

}

game();

