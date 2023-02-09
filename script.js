let player = parseInt(document.getElementById('player-score').textContent);
let machine = parseInt(document.getElementById('machine-score').textContent);
let playerScore = document.getElementById('player-score');
let machineScore = document.getElementById('machine-score');


const machineChoice = () => {
    const num = Math.floor(Math.random() * 3)
    switch(num) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function game(playerSelect) {
    const machineSelect = machineChoice();
    switch(playerSelect) {
        case "rock":
            if(machineSelect === "paper") {
                machine++;
                machineScore.textContent = machine;
            } else if(machineSelect === "scissors") {
                player++;
                playerScore.textContent = player
            } else {
                if(player > 0) {
                    player--;
                    playerScore.textContent = player;
                }
                if(machine > 0) {
                    machine--;
                    machineScore.textContent = machine;
                }
            }
            break;
        case "paper":
            if(machineSelect === "scissors") {
                machine++;
                machineScore.textContent = machine;
            } else if(machineSelect === "rock") {
                player++;
                playerScore.textContent = player
            } else {
                if(player > 0) {
                    player--;
                    playerScore.textContent = player;
                }
                if(machine > 0) {
                    machine--;
                    machineScore.textContent = machine;
                }
            }
            break;
        case "scissors":
            if(machineSelect === "rock") {
                machine++;
                machineScore.textContent = machine;
            } else if(machineSelect === "paper") {
                player++;
                playerScore.textContent = player
            } else {
                if(player > 0) {
                    player--;
                    playerScore.textContent = player;
                }
                if(machine > 0) {
                    machine--;
                    machineScore.textContent = machine;
                }
            }
            break;
    }
}


const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', () => game('rock'));
paperButton.addEventListener('click', () => game('paper'));
scissorsButton.addEventListener('click', () => game('scissors'));