function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3)
    computerDisplay.innerHTML = "";
    if (randomNumber === 0) {
        computerChoiceDisplay.innerHTML = '<img src="./assets/scissorsimg.png" alt="Scissors illustration">';
        return "scissors"
    } else if (randomNumber === 1) {
        computerChoiceDisplay.innerHTML = '<img src="./assets/rockimg.png" alt="Rock illustration">';
        return "rock"
    } else {
        computerChoiceDisplay.innerHTML = '<img src="./assets/paperimg.png" alt="Paper illustration">';
        return "paper"
    }
}

let countPlayer = 0;
let countComputer = 0;
let gameIsOver = 0;
let playerSelection;

function playRound() {
    let computerSelection = computerPlay();
    
    if (playerSelection === computerSelection) {
        resultDisplay.textContent = "It's a tie"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        countPlayer++
        resultDisplay.textContent = "You win!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        countPlayer++
        resultDisplay.textContent = "You win!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        countPlayer++
        resultDisplay.textContent = "You win!"
    } else {
        countComputer++
        resultDisplay.textContent = "You lose :("
    };

    if (countPlayer >= 5) {
        resultDisplay.textContent = 'You won the game!';
        reloadDisplay.textContent = 'Click a weapon to play again';
        gameIsOver++;
    } else if (countComputer >= 5) {
        resultDisplay.textContent = 'You lost the game 😔';
        reloadDisplay.textContent = 'Click a weapon to play again';
        gameIsOver++;
    };

    if (gameIsOver == 2) {
        location.reload()
    };

    userCountDisplay.textContent = "You: " + countPlayer;
    computerCountDisplay.textContent = "Computer: " + countComputer;
}



// User Interface
const rockDisplay = document.querySelector('.main__choice-rock');
const paperDisplay = document.querySelector('.main__choice-paper');
const scissorsDisplay = document.querySelector('.main__choice-scissors');

const userDisplay = document.querySelector('#user-question-mark');
const computerDisplay = document.querySelector('#computer-question-mark');
const imgCreate = document.createElement('img');

const userChoiceDisplay = document.querySelector('#user-result');
const computerChoiceDisplay = document.querySelector('#computer-result');

const userCountDisplay = document.querySelector('.main__usercount');
const computerCountDisplay = document.querySelector('.main__computercount');

const resultDisplay = document.getElementById('result-display');
const reloadDisplay = document.getElementById('reload-display')

function playGame(weapon) {
    playerSelection = weapon;
    playRound();
    userDisplay.innerHTML = '';
    userChoiceDisplay.innerHTML = `<img src="./assets/${weapon}img.png" alt="${weapon} Illustration">`;
};

rockDisplay.addEventListener('click', () => playGame('rock'));
paperDisplay.addEventListener('click', () => playGame('paper'));
scissorsDisplay.addEventListener('click', () => playGame('scissors'));