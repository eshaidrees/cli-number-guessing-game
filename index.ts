#! /usr/bin/env node

import inquirer  from "inquirer";

// computer will generated number
// user input for guessed number
// compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 5:",
    },
]);

if(answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation! you are guessed right number.");
} else {
    console.log("You guessed wrong number");
}