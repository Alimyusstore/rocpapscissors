const chioces = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerCount");
const computerScore = document.getElementById("computerCount");
const tieScore = document.getElementById("tieCount");



let scores =  JSON.parse(localStorage.getItem('scores')) || {
    playerCounts : 0,
    computerCounts : 0,
    tieCounts : 0
};
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
        scores.playerCounts += 1;
        playerScore.textContent = scores.playerCounts;
        resultDisplay.classList.add("greenColor");
    }
    else if(result === "YOU LOSE!"){
        scores.computerCounts +=1;
        computerScore.textContent = scores.computerCounts;
        resultDisplay.classList.add("redColor");
    }
    else{
        scores.tieCounts +=1;
        tieScore.textContent = scores.tieCounts;
    }
}
localStorage.setItem("scores", JSON.stringify(scores));

function reset() {
    scores.playerCounts = 0;
    scores.computerCounts = 0;
    scores.tieCounts = 0;
    playerScore.textContent = scores.playerCounts;
    computerScore.textContent = scores.computerCounts;
    tieScore.textContent = scores.tieCounts;
    resultDisplay.classList.remove('redColor', 'greenColor');
    resultDisplay.textContent = '';
    playerDisplay.textContent = '';
    computerDisplay.textContent = '';
    localStorage.removeItem("scores");
}
reset()