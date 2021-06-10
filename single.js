const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const cscore = document.getElementById('cscore')
const pscore = document.getElementById('pscore')
let computerScore = 0 ;
let playerScore = 0 ;
let userChoice;
let computerChoice;
possibleChoices.forEach(possibleChoices =>addEventListener('click', (e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))
function generateComputerChoice(){
    const randomNumber = Math.floor (Math.random() *  3) +1  //possibleChoices.length
if (randomNumber === 1){
    computerChoice = 'rock'
 }
 if (randomNumber === 2){
    computerChoice = 'scissors'
 }
 if (randomNumber === 3){
    computerChoice = 'paper'
 }
 computerChoiceDisplay.innerHTML = computerChoice
}    
function getResult() {
    if (computerChoice === userChoice){
        result = 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === "paper"){
        result = 'you win!!'
        playerScore++ 
        pscore.innerText = `player Score: ${playerScore}`
    }
    if(computerChoice === 'rock' && userChoice ==="scissors"){
        result = 'you lost !!'
       computerScore++ 
        cscore.innerText = `computer Score: ${computerScore}`
    }
    if(computerChoice === 'paper' && userChoice ==="scissors"){
        result = 'you win!!'
         playerScore++ 
        pscore.innerText = `player Score: ${playerScore}`
    }
    if(computerChoice === 'paper' && userChoice ==="rock"){
        result = 'you lost !!'
       computerScore++ 
        cscore.innerText = `computer Score: ${computerScore}`
    }
    if(computerChoice === 'scissors' && userChoice ==="rock"){
        result = 'you win !!'
         playerScore++ 
        pscore.innerText = `player Score: ${playerScore}`
     }
    if(computerChoice === 'scissors' && userChoice ==="paper"){
        result = 'you lost !!'
     }
     resultDisplay.innerHTML = result
}