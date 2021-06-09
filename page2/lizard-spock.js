const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
possibleChoices.forEach(possibleChoices =>addEventListener('click', (e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))


/* ************************

ROCK, PAPER, SCISSORS, LIZARD, SPOCK

********************************* */


function generateComputerChoice() {
    let randomNumber = Math.floor(Math.random() *  5);

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
    else {
    computerChoice = "spock";
    }
     computerChoiceDisplay.innerHTML = computerChoice;
    }

    //=================

    function getResult(){

    // computerChoice();

    if (computerChoice === userChoice) {
      result = 'its a draw !!'

    } 
     if (computerChoice === "rock" && userChoice === "paper") {
        result = 'you win !!  '

    } 
     if (computerChoice === "rock" && userChoice === "scissors") {
        result =  'you win !!'
    } 
     if (computerChoice === "rock" && userChoice === "lizard") {
        result = 'you lost !!'
    } 
     if (computerChoice === "rock" && userChoice === "spock") {
        result = 'you win !!'
    } 
     if (computerChoice === "paper" && userChoice === "rock") {
        result ='you lost !!'
    } 
     if (computerChoice === "paper" && userChoice === "scissors") {
        result='you win !!'
    } 
     if (computerChoice === "paper" && userChoice === "lizard") {
        result='you win !!'
    } 
     if (computerChoice === "paper" && userChoice === "spock") {
        result = 'you lost !!'
    } 
     if (computerChoice === "scissors" && userChoice === "rock") {
        result='you win !!'
    } 
     if (computerChoice === "scissors" && userChoice === "paper") {
        result='you lost !!'
    } 
     if (computerChoice === "scissors" && userChoice === "lizard") {
        result='you lost !!'
    } 
     if (computerChoice === "scissors" && userChoice === "spock") {
        result='you lost !!'
    } 
     if (computerChoice === "lizard" && userChoice === "rock") {
        result='you win !!'
    } 
     if (computerChoice === "lizard" && userChoice === "paper") {
        result='you lost !!'
    } 
     if (computerChoice === "lizard" && userChoice === "scissors") {
        result='you win !!'
    } 
     if (computerChoice === "lizard" && userChoice === "spock") {
        result='you lost !!'
    } 
     if (computerChoice === "spock" && userChoice === "rock") {
        result='you lost !!'
    } 
     if (computerChoice === "spock" && userChoice === "paper") {
        result='you win !!'
    } 
     if (computerChoice === "spock" && userChoice === "scissors") {
        result='you lost !!'
    } 
     if (computerChoice === "spock" && userChoice === "lizard") {
        result='you win !!' 
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