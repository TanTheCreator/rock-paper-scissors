let player = parseInt(document.getElementById('player-score').textContent);
let machine = parseInt(document.getElementById('machine-score').textContent);

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