let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');


function computerPlay(){     
    
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random()*choices.length)]

    return computerChoice;
    
}




function playRound(playerSelection) {

    // playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();
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

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

 function endGame () {

    if (playerScore > computerScore) {
        result = "You Won the Game";
        disableButtons();
        return

    } else (computerScore > playerScore); {
        result = "You Lost the Game";
        disableButtons();
        return   
    }
   

 }

function game () {
    console.log(playRound());
    if (playerScore < 5 && computerScore < 5){
    	game();
        
    } else {
    	endGame();  
    }
    document.getElementById('result').innerHTML = result;
}

// game();

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})