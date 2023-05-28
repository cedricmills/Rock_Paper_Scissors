function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'draw';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return 'player';
  } else {
    return 'computer';
  }
}

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playSingleRound() {
  const playerSelection = prompt('Enter your choice: rock, paper, or scissors').toLowerCase();
  const computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  alert(`You chose ${playerSelection}.\nThe computer chose ${computerSelection}.\n\n${getResultMessage(result)}`);
}

function getResultMessage(result) {
  if (result === 'draw') {
    return "It's a draw!";
  } else if (result === 'player') {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

function playBestOfThree() {
  let playerScore = 0;
  let computerScore = 0;
  let round = 1;

  while (playerScore < 2 && computerScore < 2) {
    alert(`Round ${round}`);
    const playerSelection = prompt('Enter your choice: rock, paper, or scissors').toLowerCase();
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    alert(`You chose ${playerSelection}.\nThe computer chose ${computerSelection}.\n\n${getResultMessage(result)}`);

    if (result === 'player') {
      playerScore++;
    } else if (result === 'computer') {
      computerScore++;
    }

    alert(`Current score - You: ${playerScore}, Computer: ${computerScore}`);
    round++;
  }

  if (playerScore > computerScore) {
    alert('Congratulations! You won the game!');
  } else {
    alert('Sorry, the computer won the game. Better luck next time!');
  }

  const playAgain = confirm('Do you want to play again?');
  if (playAgain) {
    startGame();
  }
}

function startGame() {
  const gameMode = prompt('Choose a game mode: 1 - Single Round, 2 - Best of Three');
  if (gameMode === '1') {
    playSingleRound();
  } else if (gameMode === '2') {
    playBestOfThree();
  } else {
    alert('Invalid game mode. Please try again.');
    startGame();
  }
}

startGame();
