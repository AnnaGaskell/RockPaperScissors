let playerScore = 0;
let computerScore = 0;

const playerScoreNum = document.getElementById("player-score");
const computerScoreNum = document.getElementById("computer-score");
const RockButton = document.getElementById("Rock");
const LeafButton = document.getElementById("Leaf");
const SticksButton = document.getElementById("Sticks");
const resultDiv = document.querySelector(".result");
const scoreBoardDiv = document.querySelector(".score-board");
const computerIcon = document.getElementById("computer-icon");
const modal = document.getElementById("display-mod");
const endResult = document.getElementById("end-result");

function computerPlay(){     
    
    const choices = ["Rock", "Leaf", "Sticks"];
    let computerChoice = choices[Math.floor(Math.random()*choices.length)]

    return computerChoice;
}

//Score
function win() {
    playerScore++;
    playerScoreNum.innerHTML = playerScore;
    computerScoreNum.innerHTML = computerScore;
}

function loss() {
    computerScore++;
    playerScoreNum.innerHTML = playerScore;
    computerScoreNum.innerHTML = computerScore;
  }

//Game
function game(playerSelection) {

    const computerSelection = computerPlay();

    //Tie
    if (playerSelection === computerSelection) 
        {
        resultDiv.innerHTML = "Tie Round, Go again Buds!"
        if (playerSelection === "Rock") {
            computerIcon.innerHTML = "Rock" 
          } else if (playerSelection === "Leaf") {
            computerIcon.innerHTML = "Leaf" 
          } else {
            computerIcon.innerHTML = "Sticks" 
          }

    //Loss    
    } else if (playerSelection === "Rock" && computerSelection === "Leaf") {
        loss();
        computerIcon.innerHTML = "Leaf" 
        resultDiv.innerHTML = "You Lost this Round";
    }
    else if (playerSelection === "Sticks" && computerSelection === "Rock") {
        loss();
        computerIcon.innerHTML = "Rock" 
        resultDiv.innerHTML = "You Lost this Round";
    }
    else if (playerSelection === "Leaf" && computerSelection === "Sticks") {
        loss();
        computerIcon.innerHTML = "Sticks" 
        resultDiv.innerHTML = "You Lost this Round";
       
    //Win  
    } else if (playerSelection === "Rock" && computerSelection === "Sticks"){
            win();
            computerIcon.innerHTML = "Sticks" 
            resultDiv.innerHTML = "You Won this Round";
        }
    else if (playerSelection === "Sticks" && computerSelection === "Leaf") {
            win();
            computerIcon.innerHTML = "Leaf" 
            resultDiv.innerHTML = "You Won this Round";
        }
    else if (playerSelection === "Leaf" && computerSelection === "Rock") {
            win();
            computerIcon.innerHTML = "Rock" 
            resultDiv.innerHTML = "You Won this Round";
    }
            
    checkWinner();
}

//Button Functions

 main();

 function main() {
    RockButton.addEventListener('click', () => game("Rock"));
    LeafButton.addEventListener('click', () => game("Leaf"));
    SticksButton.addEventListener('click', () => game("Sticks"));
 }


function checkWinner(){
    if (playerScore === 5) {
        openModal();
        return endResult.innerHTML =  "Eh You Won Bud!";
      } else if (computerScore === 5) {
        openModal();
        return endResult.innerHTML = "Oof You Lost That One Bud";
      } 
    return
}

//End Game & Restart

const openModal = () => {
  modal.classList.add('on');
}

const restartGame = () => {
  window.location.reload();
}