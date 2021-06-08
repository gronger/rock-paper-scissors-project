## Basic

function playGame

function for creating a user (users choice)

function for computer (computers choice)

if user == "paper" && computer == "scissors"
console.log("computer has won");


## How to ??? 

How to divide task?

use a Class? (advanced)
functions... would be many functions
use .filter() -- filter into source - if rock is true, is paper true, etc etc

-not a huge project .. maybe can do it 2 times... once with functions and once with class


## git and guthub


git checkout -b branchname --- how to make a new branch
git checkout branchname ---- switch to other branch
git checkout ------- see how many branches u have

we alll work on our own branches
and then PULL request when finished 
then someone check pull request
( everyone goes to one branch )


## COMBINING HTML, CSS AND JS

at end of html file

<script src="index.js"></script>
can write css in js file

<button onclick="alertBtn()">

function alertBtn() {
    alert("its working");
}

search DOM on mdn for more


## more 

joseph - rock paper scissors lizard spock

abdul - rock paper scissors between more users
---- like tournament

abdul -dom - html 

joseph -version of game with Class

rock paper scissors water human

 rock paper scissors water human
rock crushes scissors and human
paper covers rock, floats on water
scissors cut paper and human
water erodes rock, rusts scissors
human writes paper, drinks water

-expand on current game or make other little games?

focus more on planning


## js bootstrap html etc

we can make multiple JS files, vbut add all of them in the end of the HTML with script tags

give buttons an id="hidden" 
const hiddenBtn = document.getElementById("hiddenBtn");

addEventListener() - check out the video from Milad

## updating the score ?? 2 functions ? increment comp score by one, increment user score by 1

const userScore = 0;
const computerScore = 0;

const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");

WHY SPAN THO .. he says highly recommend it tho

const scoreBoard_div = document.querySelector(".scoreBoard");
const result_div = document.querySelector(".result");

then 31.00 const rock div, paper div etc

cacheing is storing smth for later use
cacheing dom is that

ok just write it :

const rock_div = document.querySelector("rock");
const paper_div = document.querySelector("paper");
const scissors_div = document.querySelector("scissors");

function getComputerChoice() {
    <!-- // math.random stuff!!!!
    const choices = ["rock", "paper", "scissors"]; 
    
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber]; -->

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
}

getComputerChoice();

function win() {
    console.log("You won");
    userScore++;
    // INCREMENT THE SCORE ABOVE
}

function lose() {
    console.log("You lost");
    userScore--;
    // DECREMENT THE USER SCORE
}

function draw() {
    console.log("its a draw");
}


function game(userChoice) {
   const computerChoice = getComputerChoice(); 
    console.log("computer choice = " + computerChoice);

// NOW START WITH ALL THE IF STATEMENTS

 // IN BETWEEN IF STATEMNTS CALL ANOTHER FUNCTION..CALLD LIKE "WIN"

<!-- function main() {

    rock_div.addEventListener("click", function() {
        console.log("guten tag u clicked on rock");
        playGame("rock");

       
})

    paper_div.addEventListener("click", function() {
        console.log("guten tag u clicked on rock");
        playGame("paper"):
    })

    scissors_div.addEventListener("click", function() {
        console.log("guten tag u clicked on rock");
        playGame("scissors");
})
} -->

main();


