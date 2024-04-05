#!/usr/bin/node
import inquirer from "inquirer";
const randomNubber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([{
        name: "userGuessnumber",
        type: "number",
        message: "please guess a number:"
    }]);
if (answers.userGuessnumber === randomNubber) {
    console.log("congrutulation you guessed right number.");
}
else
    (console.log("you guessed wrong nnmber."));
