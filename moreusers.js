function playGame(firstUser,secondUser) {
    if (firstUser === secondUser) {
        console.log("draw");
    } else if (firstUser === "rock" && secondUser === "paper") {
        console.log(`Computer has selected ${firstUser} and you selected ${secondUser}. Computer has won`);
    } else if (firstUser === "rock" && secondUser === "scissors") {
        console.log(`Computer chose ${firstUser} and you chose ${secondUser}. COmputer has won! `);
    } else if (firstUser === "paper" && secondUser === "rock") {
        console.log(`computer chose ${firstUser} and you chose ${secondUser}. Computer won this round`);
    }
    else if (firstUser === "paper" && secondUser === "scissors") {
        console.log(`Computer chose ${firstUser} and you chose ${secondUser}. You have won!!!!!`);
    } else if (firstUser === "scissors" && secondUser === "rock") {
        console.log(`computer chose ${firstUser} and you chose ${secondUser}. You hav e won`);
    } else if (firstUser === "scissors" && secondUser === "paper") {
        console.log(`Computer chose ${firstUser} and you chose ${secondUser}. Computer won`);
    }
}
playGame("rock", "rock");