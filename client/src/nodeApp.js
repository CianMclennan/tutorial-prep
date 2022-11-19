const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

function randomise() {
	return Math.random() > 0.5 ? 1 : -1;
}

const options = [
	'blue',
	'ruby',
	'amber',
	'orange',
	'grey',
	'green',
];

const tempOptions = options.sort(randomise);

let currentAnswer = '';
let currentQuery = [];

const handleAnswer = (answer) => {
	const answerInt = parseInt(answer);
	if (answerInt !== 1 && answerInt !== 2) {
		console.log(`${answer} is not a valid answer`);
		askQuestion(false);
		return;
	}

	currentAnswer = currentQuery[answerInt-1];
	askQuestion();
}

function askQuestion(shouldUpdateOptions = true) {
	if (tempOptions.length === 0) {
		endGame(currentAnswer);
	}

	if(shouldUpdateOptions) {
		const team1 = currentAnswer || tempOptions.pop();
		const team2 = tempOptions.pop();
		currentQuery = [team1, team2];
	}

	const questionText = `Do you prefer:\n1: ${currentQuery[0]}\n2: ${currentQuery[1]}\n> `;
	readline.question(questionText, handleAnswer);
}

function endGame(winner) {
	console.log(`${winner} is the best team.`);
	process.exit(0);
}

askQuestion();