function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
        return "scissors"
    } else if (randomNumber === 1) {
        return "rock"
    } else {
        return "paper"
    }
}

let countPlayer = 0;
let countComputer = 0;

for (let i = 0; i < 5; i++) {
    let result = playRound()
    console.log(result)
    if (i === 4) {
        if (countPlayer > countComputer) {
            console.log("You win the game")
        } else if (countPlayer < countComputer) {
            console.log("You lose the game") 
        } else {
            console.log("This game is a tie")
        }
        console.log(countPlayer, countComputer)
    }
}

function playRound() {
    let playerSelection = prompt("Type rock, scissors or paper").toLowerCase()
    let computerSelection = computerPlay()
    
    if (playerSelection === computerSelection) {
        return "It's a tie"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        countPlayer++
        return "You win!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        countPlayer++
        return "You win!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        countPlayer++
        return "You win!"
    } else {
        countComputer++
        return "You lose :("
    }
}