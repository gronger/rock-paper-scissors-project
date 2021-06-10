var userChoice = prompt("Do you choose rock, paper or scissors?","Don't use articles (i.e. the, a, etc.)").toLowerCase();

var computerChoice = Math.random();

if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

function userImgDisplay() {
  var image = document.getElementById('myImage');
  if (userChoice = "rock") {
    image.src = "rock.png";
  }else if (userChoice = "paper") {
    image.src = "paper.png";
  }else if (userChoice = "scissors") {
    image.src = "scissors.png";
  }
}

function comImgDisplay() {
  var image = document.getElementById('myImage');
  if (computerChoice = "rock") {
    image.src = "rock.png";
  }else if (computerChoice = "paper") {
    image.src = "paper.png";
  }else if (computerChoice = "scissors") {
    image.src = "scissors.png";
  }
}