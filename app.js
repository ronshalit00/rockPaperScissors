let winsCount = 0;
let loseCount = 0;
let roundCount = 1;

function getComputerChoice() {
	const choicesArr = ["rock", "paper", "scissors"];
	const choice = Math.floor(Math.random() * choicesArr.length);
	console.table;
	return choicesArr[choice];
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection == null) {
		return;
	}
	const playerChoice = playerSelection.toLowerCase();
	const computerChoice = computerSelection;

	if (playerChoice === "rock") {
		if (computerChoice === "rock") {
			roundCount++;
			return "It's a tie! Rock vs Rock";
		} else if (computerChoice === "paper") {
			roundCount++;
			loseCount++;
			return "You lose! Paper beats Rock";
		} else {
			roundCount++;
			winsCount++;
			return "You won! Rock beats Scissors";
		}
	} else if (playerChoice === "paper") {
		if (computerChoice === "rock") {
			roundCount++;
			winsCount++;
			return "You won! Paper beats Rock";
		} else if (computerChoice === "paper") {
			roundCount++;
			return "It's a tie! Paper vs Paper";
		} else {
			roundCount++;
			loseCount++;
			return "You lose! Scissors beats Paper";
		}
	} else if (playerChoice === "scissors") {
		if (computerChoice === "rock") {
			roundCount++;
			loseCount++;
			return "You lose! Rock beats Scissors";
		} else if (computerChoice === "paper") {
			roundCount++;
			winsCount++;
			return "You won! Scissors beats Paper";
		} else {
			roundCount++;
			return "It's a tie! Scissors vs Scissors";
		}
	} else {
		return "Failed attempt, please choose between 'Rock', 'Paper' or 'Scissors'";
	}
}

function game() {
	while (roundCount < 6 && winsCount < 3) {
		const playerChoice = prompt(
			"Please choose between rock, paper or scissors:"
		);
		console.log(`Round ${roundCount}:`);
		console.log(playRound(playerChoice, getComputerChoice()));
	}
	if (winsCount > loseCount || winsCount > 2) {
		console.log(
			`WINNER WINNER CHICKEN DINNER! You won the game with ${winsCount} rounds won!`
		);
	} else if (winsCount === loseCount) {
		console.log(`You're tied with ${winsCount} wins!`);
	} else {
		console.log(
			`SUCH A SHAME! You lose the game with ${winsCount} rounds won.`
		);
	}
	roundCount = 1;
	winsCount = 0;
	loseCount = 0;
}
