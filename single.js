const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const cscore = document.getElementById('cscore')
const pscore = document.getElementById('pscore')
let computerScore = 0;
let playerScore = 0;
let userChoice;
let computerChoice;
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))
function addPlayer() {
    resultDisplay.innerText = 'you win!!'
    playerScore = playerScore + 1
    pscore.innerText = playerScore
}
function addComputer() {
    resultDisplay.innerText = 'you Lost!!'
    computerScore = computerScore + 1
    cscore.innerText = computerScore
}
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 //possibleChoices.length
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
function getResult() {
    if (computerChoice === userChoice) {
        resultDisplay.innerText = 'its a draw!'
    }
    else if (computerChoice === 'rock' && userChoice === "paper") {
        return addPlayer();
    }
    else if (computerChoice === 'rock' && userChoice === "scissors") {
        return addComputer();
    }
    else if (computerChoice === 'paper' && userChoice === "scissors") {
        return addPlayer();
    }
    else if (computerChoice === 'paper' && userChoice === "rock") {
        return addComputer();
    }
    else if (computerChoice === 'scissors' && userChoice === "rock") {
        return addPlayer();
    }
    else if (computerChoice === 'scissors' && userChoice === "paper") {
        return addComputer();
    }
}