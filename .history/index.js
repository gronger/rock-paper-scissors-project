const text = document.querySelector(".title")
const changeColor = document.querySelector(".changeColor")

text.style.color="blue"
changeColor.style.color="green"

function playGame(userChoice) {
    // const namesArray = ["rock", "paper", "scissors"];
    let computerChoice = Math.random() * 3;
    if (computerChoice < 1) {
        computerChoice = "rock";
    } else if (computerChoice < 2) {
        computerChoice = "scissors";
    } else {
        computerChoice = "paper";
    }
    if (computerChoice === userChoice) {
        console.log(`You chose ${userChoice} and the computer chose ${computerChoice}..... It's a draw!`);
    } else if (computerChoice === "rock" && userChoice === "paper") {
        console.log(`The computer has selected ${computerChoice} and you selected ${userChoice}. The computer has won :((`);
    } else if (computerChoice === "rock" && userChoice === "scissors") {
        console.log(`Computer chose ${computerChoice} and you chose ${userChoice}. Computer wins! Sorry </3 `);
    } else if (computerChoice === "paper" && userChoice === "rock") {
        console.log(`computer chose ${computerChoice} and you chose ${userChoice}. The computer won this round`);
    } else if (computerChoice === "paper" && userChoice === "scissors") {
        console.log(`Computer chose ${computerChoice} and you chose ${userChoice}. Congrats, you have won!!!!!`);
    } else if (computerChoice === "scissors" && userChoice === "rock") {
        console.log(`The computer chose ${computerChoice} and you chose ${userChoice}....... You're a winner!!!!!!`);
    } else if (computerChoice === "scissors" && userChoice === "paper") {
        console.log(`Computer chose ${computerChoice} and you chose ${userChoice}. The computer has won ;-;`);
    }
}
playGame("rock");

