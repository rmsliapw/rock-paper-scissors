// Play one round
function playRound() {

  if (player === 'rock') {
    return comp === 'paper' ? 'Computer won' : comp === 'scissors' ? 'Player won' : 'Try again';
  } else if (player === 'paper') {
    return comp === 'rock' ? 'Player won' : comp === 'scissors' ? 'Computer won' : 'Try again';
  } else if (player === 'scissors') {
    return comp === 'rock' ? 'Computer won' : comp === 'paper' ? 'Player won' : 'Try again';
  }
}

// Play five rounds
function game() {
  let playerScore = 0;
  let compScore = 0;

  for (let i = 0; i < 5; i++) {
    const result = playRound();
    console.log(result);

    if (result.includes('Player')) {
      playerScore++;
    } else if (result.includes('Computer')) {
      compScore++;
    }
  }

  return "Result is: " + "Player : " + playerScore + " " + "Computer: " + compScore;
}

// Log game rusult
const gameResult = game();
console.log(gameResult);