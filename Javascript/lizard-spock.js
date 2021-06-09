

/* ************************

ROCK, PAPER, SCISSORS, LIZARD, SPOCK

********************************* */


function lizardSpock(userChoice) {

let computerChoice = Math.random() * 5;

    if (computerChoice < 1) {
    computerChoice = "rock";
    } else if (computerChoice < 2) {
    computerChoice = "scissors";
    } else if (computerChoice < 3) {
    computerChoice = "paper";
    } else if (computerChoice < 4) {
    computerChoice = "lizard";
    } else {
    computerChoice = "spock";
    }
            
    if (computerChoice === userChoice) {
        console.log(`You chose ${userChoice} and the computer chose ${computerChoice}..... It's a draw!`);       
    } else if (computerChoice === "rock" && userChoice === "paper") {
        console.log(`The computer has selected ${computerChoice} and you selected ${userChoice}. The computer has won :((`);
    } else if (computerChoice === "rock" && userChoice === "scissors") {
        console.log(`Computer chose ${computerChoice} and you chose ${userChoice}. Computer wins! Sorry </3 `);
    } else if (computerChoice === "rock" && userChoice === "lizard") {
        console.log(`The computer chose ${computerChoice} and you chose ${userChoice}. Rock squishes lizard, computer won :(`);
    } else if (computerChoice === "rock" && userChoice === "spock") {
        console.log(`The computer chose ${computerChoice} and you chose ${userChoice}. Spock vaporises rock, so you won!`);
    } else if (computerChoice === "paper" && userChoice === "rock") {
        console.log(`computer chose ${computerChoice} and you chose ${userChoice}. The computer won this round`);
    } else if (computerChoice === "paper" && userChoice === "scissors") {
        console.log(`Computer chose ${computerChoice} and you chose ${userChoice}. Congrats, you have won!!!!!`);
    } else if (computerChoice === "paper" && userChoice === "lizard") {
        console.log(`Computer chose ${computerChoice} and you chose ${userChoice}. Lizard eats paper...... computer won` );
    } else if (computerChoice === "paper" && userChoice === "spock") {
        console.log(`Computer chose ${computerChoice} and you chose ${userChoice}. Paper disproves Spock...... you lose :(((`);
    } else if (computerChoice === "scissors" && userChoice === "rock") {
        console.log(`The computer chose ${computerChoice} and you chose ${userChoice}....... You're a winner!!!!!!`);
    } else if (computerChoice === "scissors" && userChoice === "paper") {
        console.log(`Computer chose ${computerChoice} and you chose ${userChoice}. The computer has won ;-;`);
    } else if (computerChoice === "scissors" && userChoice === "lizard") {
        console.log(`The computer chose ${computerChoice} and you chose ${userChoice}. Scissors decapitates lizard... sadly the computer won`);
    } else if (computerChoice === "scissors" && userChoice === "spock") {
        console.log(`The computer chose ${computerChoice} and you chose ${userChoice}. Spock smashes the scissors so you won :p`);
    } else if (computerChoice === "lizard" && userChoice === "rock") {
        console.log(`The computer chose ${computerChoice} and you chose ${userChoice}. Rock crushes lizard, you won!11`);
    } else if (computerChoice === "lizard" && userChoice === "paper") {
        console.log(`The computer chose ${computerChoice} and you chose ${userChoice}. Lizard eats paper. The computer wins this round`);
    } else if (computerChoice === "lizard" && userChoice === "scissors") {
        console.log(`The computer chose ${computerChoice} and you chose ${userChoice}. Scissors decapitates lizard, you won.`);
    } else if (computerChoice === "lizard" && userChoice === "spock") {
        console.log(`The computer chose ${computerChoice} and you chose ${userChoice}. Lizard poisons Spock, the computer wins.`);
    } else if (computerChoice === "spock" && userChoice === "rock") {
        console.log(`The computer chose ${computerChoice} and you chose ${userChoice}. Spock vaporises rock, computer wins`);
    } else if (computerChoice === "spock" && userChoice === "paper") {
        console.log(`The computer chose ${computerChoice} and you chose ${userChoice}. Paper disproves Spock, you lost.`);
    } else if (computerChoice === "spock" && userChoice === "scissors") {
        (`The computer chose ${computerChoice} and you chose ${userChoice}. Spock smashes scissors, you lose.`);
    } else if (computerChoice === "spock" && userChoice === "lizard") {
        console.log(`The computer chose ${computerChoice} and you chose ${userChoice}. Lizard poisons Spock, you win`);
    }

}
            
lizardSpock("spock");     
console.log("test"); 
            

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



