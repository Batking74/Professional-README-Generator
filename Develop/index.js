// TODO: Include packages needed for this application
const generater = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your repository? '
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a repository description: '
    },
    {
        type: 'input',
        name: 'question1',
        message: 'What was your motivation?'
    },
    {
        type: 'input',
        name: 'question2',
        message: 'Why did you build this project?'
    },
    {
        type: 'input',
        name: 'question3',
        message: 'What problem does it solve?'
    },
    {
        type: 'input',
        name: 'question4',
        message: 'What did you learn? '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project step by step? '
    },
    {
        type: 'input',
        name: 'contributers',
        message: 'Who have you contributed with? '
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the some tests for this project? '
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have? (Use Array keys)',
        choices: ['MIT', 'Apache 2.0', 'GPLv3', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Whats your GitHub username? '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Whats your Email? '
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generater.generateMarkdown(data), (error) => {
        if(error) throw error;
    });
    return "Completed!";
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        const res = writeToFile('README.md', answers);
        console.log(res)
        
    })
    .catch(error => {
        console.log(error);
    })
}

// Function call to initialize app
init();
