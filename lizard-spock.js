const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

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

/* ************************

ROCK, PAPER, SCISSORS, LIZARD, SPOCK

********************************* */


function generateComputerChoice() {
    let randomNumber = Math.floor(Math.random() *  5) + 1;

    if (randomNumber === 1) {
    computerChoice = "rock";
    } 
     if (randomNumber === 2) {
    computerChoice = "scissors";
    } 
     if (randomNumber === 3) {
    computerChoice = "paper";
    } 
     if (randomNumber === 4) {
    computerChoice = "lizard";
    } 
    if (randomNumber === 5) {
        computerChoice = "spock";
    }
     computerChoiceDisplay.innerHTML = computerChoice;
    }

    //=================

    function getResult() {

    // computerChoice();

    if (computerChoice === userChoice) {
      result = 'its a draw!'

    } 
     if (computerChoice === "rock" && userChoice === "paper") {
        result = 'you win!!  '
        return addPlayer();

    } 
     if (computerChoice === "rock" && userChoice === "scissors") {
        result =  'you lost !!'
        return addComputer();
    } 
     if (computerChoice === "rock" && userChoice === "lizard") {
        result = 'you lost!!'
        return addComputer();
    } 
     if (computerChoice === "rock" && userChoice === "spock") {
        result = 'you win !!'
        return addPlayer();
    } 
     if (computerChoice === "paper" && userChoice === "rock") {
        result = 'you lost  !!'
        return addComputer();
    } 
     if (computerChoice === "paper" && userChoice === "scissors") {
        result = 'you win !!'
        return addPlayer();
    } 
     if (computerChoice === "paper" && userChoice === "lizard") {
        result = 'you win !!'
        return addPlayer();
    } 
     if (computerChoice === "paper" && userChoice === "spock") {
        result = 'you  lost !!'
        return addComputer();
    } 
     if (computerChoice === "scissors" && userChoice === "rock") {
        result = 'you win !!'  
        return addPlayer();
    } 
     if (computerChoice === "scissors" && userChoice === "paper") {
        result = 'you lost !!'
        return addComputer();
    } 
     if (computerChoice === "scissors" && userChoice === "lizard") {
        result = 'you lost !!'
        return addComputer();
    } 
     if (computerChoice === "scissors" && userChoice === "spock") {
        result = 'you win !!'
        return addPlayer();
    } 
     if (computerChoice === "lizard" && userChoice === "rock") {
        result = 'you win !!'
        return addPlayer();
    } 
     if (computerChoice === "lizard" && userChoice === "paper") {
        result = 'you  lost !!'
        return addComputer();
    } 
     if (computerChoice === "lizard" && userChoice === "scissors") {
        result = 'you win !!'
        return addPlayer();
    } 
     if (computerChoice === "lizard" && userChoice === "spock") {
        result = 'you lost  !!'
        return addComputer();
    } 
     if (computerChoice === "spock" && userChoice === "rock") {
        result = 'you  lost your wallet !!'
        return addComputer();
    } 
     if (computerChoice === "spock" && userChoice === "paper") {
        result = 'you win  !!'
        return addPlayer();
    } 
     if (computerChoice === "spock" && userChoice === "scissors") {
        result = 'you lost  !!'
        return addComputer();
    } 
     if (computerChoice === "spock" && userChoice === "lizard") {
        result = 'you win !!'
        return addPlayer();
    }
resultDisplay.innerHTML = result;
}

            

// getElementById



// listening to click events






// scissors cut paper,
// paper covers rock,
// rock crushes lizard,
// lizard poisens Spock,
// Spock smashes scissors,
// scissors decapotates lizard,
// lizard eats paper,
// paper disproves Spock,
// Spock vaporises rock,
// and as it always has,
// rock crushes scissors.