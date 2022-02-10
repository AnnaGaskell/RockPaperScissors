let playerScore = 0;
let computerScore = 0;

const RockButton = document.querySelector(".RockButton");
const LeafButton = document.querySelector(".LeafButton");
const SticksButton = document.querySelector(".SticksButton");

function computerPlay(){     
    
    const choices = ["Rock", "Leaf", "Sticks"];
    let computerChoice = choices[Math.floor(Math.random()*choices.length)]

    return computerChoice;
    
}

function playRound(playerSelection, computerSelection) {

    playerSelection = this.dataset.button;
    computerSelection = computerPlay();
    let result = ""
    
    if (playerSelection === computerSelection) 
        {
        result = ("Tie Round. You both chose " + playerSelection
        + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        
    } else if
        ((playerSelection === "Rock" && computerSelection === "Leaf") || 
        (playerSelection === "Sticks" && computerSelection === "Rock") ||
        (playerSelection === "Leaf" && computerSelection === "Sticks"))
                
        {
        computerScore++;
        result = ("You Lost this Round - " + computerSelection + " beats " + playerSelection + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        
        if (computerScore == 5) {
            result += "<br><br>The Computer won the game! Reload the page to play again"
            
            }
    } else if 
        ((playerSelection === "Rock" && computerSelection === "Sticks") ||
        (playerSelection === "Sticks" && computerSelection === "Leaf") ||
        (playerSelection === "Leaf" && computerSelection === "Rock")) 
            
        {
        playerScore++;
        result = ("You Won this Round - " + playerSelection + " beats " + computerSelection + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        
        if (playerScore == 5) {
            result += "<br><br>You won the game! Reload the page to play again"
            
            }
    }
   
document.getElementById("results").innerHTML = result
return
    
}


RockButton.addEventListener('click', playRound);
LeafButton.addEventListener('click', playRound);
SticksButton.addEventListener('click', playRound);
