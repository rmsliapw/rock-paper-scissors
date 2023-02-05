'use strict';

// Computer selection
function getCompChoice() {
  const randomNum = Math.ceil(Math.random() * 3);
  if (randomNum === 1) {
    return 'rock';
  } else if (randomNum === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Play one round
function playRound(player, comp) {

  if (player === 'rock') {
    return comp === 'paper' ? 'Computer won' : comp === 'scissors' ? 'Player won' : 'Try again';
  } else if (player === 'paper') {
    return comp === 'rock' ? 'Player won' : comp === 'scissors' ? 'Computer won' : 'Try again';
  } else if (player === 'scissors') {
    return comp === 'rock' ? 'Computer won' : comp === 'paper' ? 'Player won' : 'Try again';
  }
}

// Update score
function updateScore(result) {
  if (result.includes('Player')) {
    playerScore++;
    playerScoreBox.textContent = playerScore;
  } else if (result.includes('Computer')) {
    compScore++;
    computerScoreBox.textContent = compScore;
  }

  if (playerScore === 5) {
    selections.innerHTML = "";
    selections.textContent = "Player won! ";
    selections.style.color = "green";
    computerText.textContent = '';
    resultText.textContent = '';
    return;
  } else if (compScore === 5) {
    selections.innerHTML = "";
    selections.textContent = "Computer won!";
    selections.style.color = "red";
    computerText.textContent = '';
    resultText.textContent = '';
    return;
  }
}

const selections = document.querySelector('.selections');
const images = document.querySelectorAll('img');
const computerText = document.querySelector('.computer');
const resultText = document.querySelector('.result');
const playerScoreBox = document.querySelector('.player-score');
const computerScoreBox = document.querySelector('.computer-score');
let playerScore = 0;
let compScore = 0;

images.forEach(image => image.addEventListener('click', (e) => {
  const player = e.target.alt.toLowerCase();
  const comp = getCompChoice();
  computerText.textContent = "Computer choosing " + comp;
  const result = playRound(player, comp);
  resultText.textContent = result;
  updateScore(result);
}))