#! /usr/bin/env node
import inquirer from 'inquirer';
const todoList = [];
console.log('\n\t\x1b[42m-------------------------------------\x1b[0m');
console.log('\t\x1b[36m\x1b[1m Bilawal Hussain\'s TODO LIST PROJECT \x1b[0m');
console.log('\t\x1b[42m-------------------------------------\x1b[0m');
async function displayTodoList() {
    console.log('\x1b[36mTodo List:\x1b[0m'); // Blue color
    todoList.forEach((item, index) => {
        console.log(`\x1b[33m${index + 1}. ${item}\x1b[0m`); // Yellow color
    });
}
async function addTodo() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'todo',
            message: '\x1b[32mEnter a new todo item:\x1b[0m' // Green color
        }
    ]);
    todoList.push(answers.todo);
    await displayTodoList();
}
async function deleteTodo() {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'index',
            message: '\x1b[31mEnter the index of the todo item to delete:\x1b[0m' // Red color
        }
    ]);
    const index = answers.index - 1;
    if (index >= 0 && index < todoList.length) {
        todoList.splice(index, 1);
        await displayTodoList();
    }
    else {
        console.log('\x1b[31mInvalid index!\x1b[0m'); // Red color
    }
}
async function viewTodo() {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'index',
            message: '\x1b[34mEnter the index of the todo item to view:\x1b[0m' // Blue color
        }
    ]);
    const index = answers.index - 1;
    if (index >= 0 && index < todoList.length) {
        console.log(`\x1b[33m${todoList[index]}\x1b[0m`); // Yellow color
    }
    else {
        console.log('\x1b[31mInvalid index!\x1b[0m'); // Red color
    }
}
async function main() {
    while (true) {
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: '\x1b[35mChoose an action:\x1b[0m', // Magenta color
                choices: ['Add Todo', 'Delete Todo', 'View Todo', 'Display Todo List', 'Quit']
            }
        ]);
        switch (answers.action) {
            case 'Add Todo':
                await addTodo();
                break;
            case 'Delete Todo':
                await deleteTodo();
                break;
            case 'View Todo':
                await viewTodo();
                break;
            case 'Display Todo List':
                await displayTodoList();
                break;
            case 'Quit':
                console.log('\x1b[31mGoodbye!\x1b[0m'); // Red color
                return;
        }
    }
}
main();
