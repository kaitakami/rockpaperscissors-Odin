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

// for (let i = 0; i < 5; i++) {
//     let result = playRound()
//     console.log(result)
//     if (i === 4) {
//         if (countPlayer > countComputer) {
//             console.log("You win the game")
//         } else if (countPlayer < countComputer) {
//             console.log("You lose the game") 
//         } else {
//             console.log("This game is a tie")
//         }
//         console.log(countPlayer, countComputer)
//     }

let playerSelection;
function playRound() {
    let computerSelection = computerPlay()
    console.log(playerSelection)
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
    }

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

rockDisplay.addEventListener('click', () => {
    playerSelection = "rock";
    playRound();
    userDisplay.innerHTML = "";
    userChoiceDisplay.innerHTML = '<img src="./assets/rockimg.png" alt="Rock Illustration">';
});

paperDisplay.addEventListener('click', () => {
    playerSelection = "paper";
    playRound();
    userDisplay.innerHTML = "";
    userChoiceDisplay.innerHTML = '<img src="./assets/paperimg.png" alt="Paper Illustration">';
});

scissorsDisplay.addEventListener('click', () => {
    playerSelection = "scissors";
    playRound();
    userDisplay.innerHTML = "";
    userChoiceDisplay.innerHTML = '<img src="./assets/scissorsimg.png" alt="Scissors Illustration">';
});