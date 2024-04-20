#! /usr/bin/env node
import inquirer from "inquirer";
let todos = []; //Shopper []
let condition = true;
while (condition) {
    let todoQuestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "what would you like to add in your Todos?",
        },
        {
            name: "secondQuestion",
            type: "confirm", //When type is confirm answer is in yes is no
            message: "would you like to add more in your todos?",
            default: "true",
        },
    ]);
    todos.push(todoQuestions.firstQuestion);
    console.log(todos);
    // The loop is runing on the based of this varible condition
    condition = todoQuestions.secondQuestion;
}
