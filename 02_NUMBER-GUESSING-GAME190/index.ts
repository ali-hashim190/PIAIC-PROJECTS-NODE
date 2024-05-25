import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

async function askGuess() {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'guess',
            message: 'Guess a number between 1 and 100:'
        }
    ]);

    attempts++;
    const guess = answers.guess;

    if (guess < randomNumber) {
        console.log('Too low!');
        return false;
    } else if (guess > randomNumber) {
        console.log('Too high!');
        return false;
    } else {
        console.log(`Correct! The number was ${randomNumber}. It took you ${attempts} attempts.`);
        return true;
    }
}

async function main() {
    console.log('Welcome to the Number Guessing Game!');
    let correct = false;
    while (!correct) {
        correct = await askGuess();
    }
}

main();