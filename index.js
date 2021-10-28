const $buttonStone1 = document.querySelector(".button-stone-player1");
const $buttonPaper1 = document.querySelector(".button-paper-player1");
const $buttonScissors1 = document.querySelector(".button-scissors-player1");

const $buttonStone2 = document.querySelector(".button-stone-player2");
const $buttonPaper2 = document.querySelector(".button-paper-player2");
const $buttonScissors2 = document.querySelector(".button-scissors-player2");

const $field1 = document.querySelector(".field-player1");
const $field2 = document.querySelector(".field-player2");

const $nameWinner = document.querySelector(".winner");

const $scoreboardPlayer1 = document.querySelector(".scoreboard-player1");
const $scoreboardPlayer2 = document.querySelector(".scoreboard-player2");

const $buttonRestart = document.querySelector(".button-restart");
const $buttonStart = document.querySelector(".button-start");

let movePlayer1 = "";
let movePlayer2 = "";
let winner = null;
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let startGame = false;

$buttonStone1.addEventListener("click", function () {
  if (startGame == false) return;
  $field1.innerHTML = "<img src='images/stone.png' class='img-moove'>";
  movePlayer1 = "stone";
  verifyWinner();
  if (winner != null) {
    printWinnerName(winner);
    givePoint(winner);
    printPoint();
    setTimeout(function(){
      console.log(winner)
      celebrateWinner(winner)
      resetVariables();
    }, 1000)
    setTimeout(resetBoard, 3000);
  }
});

$buttonPaper1.addEventListener("click", function () {
  if (startGame == false) return;
  $field1.innerHTML = "<img src='images/paper.png' class='img-moove'>";
  movePlayer1 = "paper";
  verifyWinner();
  if (winner != null) {
    printWinnerName(winner);
    givePoint(winner);
    printPoint();
    setTimeout(function(){
      celebrateWinner(winner)
      resetVariables();
    }, 1000)
    setTimeout(resetBoard, 3000);
  }
});

$buttonScissors1.addEventListener("click", function () {
  if (startGame == false) return;
  $field1.innerHTML = "<img src='images/scissors.png' class='img-moove'>";
  movePlayer1 = "scissors";
  verifyWinner();
  if (winner != null) {
    printWinnerName(winner);
    givePoint(winner);
    printPoint();
    setTimeout(function(){
      celebrateWinner(winner)
      resetVariables();
    }, 1000)
    setTimeout(resetBoard, 3000);
  }
});

$buttonStone2.addEventListener("click", function () {
  if (startGame == false) return;
  $field2.innerHTML = "<img src='images/stone.png' class='img-moove'>";
  movePlayer2 = "stone";
  verifyWinner();
  if (winner != null) {
    printWinnerName(winner);
    givePoint(winner);
    printPoint();
    setTimeout(function(){
      celebrateWinner(winner)
      resetVariables();
    }, 1000)
    setTimeout(resetBoard, 3000);
  }
});

$buttonPaper2.addEventListener("click", function () {
  if (startGame == false) return;
  $field2.innerHTML = "<img src='images/paper.png' class='img-moove'>";
  movePlayer2 = "paper";
  verifyWinner();
  if (winner != null) {
    printWinnerName(winner);
    givePoint(winner);
    printPoint();
    setTimeout(function(){
      celebrateWinner(winner)
      resetVariables();
    }, 1000)
    setTimeout(resetBoard, 3000);
  }
});

$buttonScissors2.addEventListener("click", function () {
  if (startGame == false) return;
  $field2.innerHTML = "<img src='images/scissors.png' class='img-moove'>";
  movePlayer2 = "scissors";
  verifyWinner();
  if (winner != null) {
    printWinnerName(winner);
    givePoint(winner);
    printPoint();
    setTimeout(function(){
      celebrateWinner(winner)
      resetVariables();
    }, 1000)
    setTimeout(resetBoard, 3000);
  }
});

$buttonStart.addEventListener("click", function () {
  if (startGame == false) {
    startGame = true;
    $buttonStart.innerHTML = 'Encerrar'
    $buttonStart.classList.add('button-start-clicked')
  } else {
    startGame = false
    $buttonStart.innerHTML = 'Iniciar'
    $buttonStart.classList.remove('button-start-clicked')
  }
});

$buttonRestart.addEventListener("click", resetAll);

function verifyWinner() {
  if (movePlayer1 == "stone" && movePlayer2 == "paper") {
    winner = 2;
  } else if (movePlayer1 == "paper" && movePlayer2 == "scissors") {
    winner = 2;
  } else if (movePlayer1 == "scissors" && movePlayer2 == "stone") {
    winner = 2;
  } else if (movePlayer2 == "stone" && movePlayer1 == "paper") {
    winner = 1;
  } else if (movePlayer2 == "paper" && movePlayer1 == "scissors") {
    winner = 1;
  } else if (movePlayer2 == "scissors" && movePlayer1 == "stone") {
    winner = 1;
  } else if (movePlayer1 == movePlayer2) {
    winner = 0;
  }
}

function printWinnerName(winner) {
  if (winner === 1) {
    $nameWinner.innerHTML = "Jogador 1 Venceu!!!";
  } else if (winner === 2) {
    $nameWinner.innerHTML = "Jogador 2 Venceu!!!";
  } else if (winner === 0) {
    $nameWinner.innerHTML = "Xiiii...";
  }
}

function givePoint(winner) {
  if (winner === 1) {
    scorePlayer1 = scorePlayer1 + 1;
  } else if (winner === 2) {
    scorePlayer2 = scorePlayer2 + 1;
  }
}

function printPoint() {
  $scoreboardPlayer1.innerHTML = scorePlayer1;
  $scoreboardPlayer2.innerHTML = scorePlayer2;
}

function resetBoard() {
  $field1.innerHTML = "";
  $field2.innerHTML = "";
}

function resetVariables() {
  movePlayer1 = "";
  movePlayer2 = "";
  winner = null;
}

function resetNameWinner() {
  $nameWinner.innerHTML = "";
}

function resetScore() {
  scorePlayer1 = 0;
  scorePlayer2 = 0;
}

function resetScoreBoard() {
    $scoreboardPlayer1.innerHTML = ''
    $scoreboardPlayer2.innerHTML = ''
}

function celebrateWinner(winner) {

  console.log(winner)
  if (winner === 1) {
    $field1.innerHTML =
    console.log('dentro do primero if', winner)
    '<lottie-player src="https://assets9.lottiefiles.com/private_files/lf30_h6i0ko7d.json"  background="transparent"  speed="3"  style="width: 600px; height: 600px;"    autoplay></lottie-player>';
  } else if (winner === 2) {
    console.log('dentro do segundo if', winner)
    $field2.innerHTML =
      '<lottie-player src="https://assets9.lottiefiles.com/private_files/lf30_h6i0ko7d.json"  background="transparent"  speed="3"  style="width: 600px; height: 600px;"    autoplay></lottie-player>';
  }
}

function resetAll() {
  resetBoard();
  resetVariables();
  resetNameWinner();
  resetScore();
  resetScoreBoard()
}

