const chioces = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerCount");
const computerScore = document.getElementById("computerCount");
const tieScore = document.getElementById("tieCount");

let playerCounts = 0;
let computerCounts = 0;
let tieCounts = 0;

function playStation(playerplay){
    let computerplay = chioces[Math.floor(Math.random() * 3)];
    let result = '';
    if(playerplay === computerplay){
        result = "IT'S A TIE!";
        resultDisplay.classList.remove('redColor', 'greenColor');
    }
    else{
        switch(playerplay){
            case 'rock':
                switch(computerplay){
                    case 'paper':
                        result = "YOU LOSE!";
                        break;
                    case'scissors':
                        result = "YOU WIN!";
                        break;
                }
                break;
            case 'paper':
                switch(computerplay){
                    case 'rock':
                        result = "YOU WIN!";
                        break;
                    case'scissors':
                        result = "YOU LOSE!";
                        break;
                }
                break;
            case'scissors':
                switch(computerplay){
                    case 'rock':
                        result = "YOU LOSE!";
                        break;
                    case 'paper':
                        result = "YOU WIN!";
                        break;
                }
                break;
        }

    }
   
    resultDisplay.textContent = result;
    playerDisplay.textContent = `PLAYER: ${playerplay}`;
    computerDisplay.textContent = `COMPUTER: ${computerplay}`;
    
    if(result === "YOU WIN!"){
        playerCounts++;
        playerScore.textContent = playerCounts;
        resultDisplay.classList.add("greenColor");
    }
    else if(result === "YOU LOSE!"){
        computerCounts++;
        computerScore.textContent = computerCounts;
        resultDisplay.classList.add("redColor");
    }
    else{
        tieCounts++;
        tieScore.textContent = tieCounts;
    }
}

function reset() {
    playerCounts = 0;
    computerCounts = 0;
    tieCounts = 0;
    playerScore.textContent = playerCounts;
    computerScore.textContent = computerCounts;
    tieScore.textContent = tieCounts;
    resultDisplay.classList.remove('redColor', 'greenColor');
    resultDisplay.textContent = '';
    playerDisplay.textContent = '';
    computerDisplay.textContent = '';
}