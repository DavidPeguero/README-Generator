// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const markdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        name : 'title', 
        type : 'input',
        message:'What is the title for your project?',
    },
    {
        name : 'description', 
        type : 'input',
        message:'What is the description for your project?',
    },
    {
        name : 'installation', 
        type : 'input',
        message:'What are the installation instructions for your project?',
    },
    {
        name : 'usage', 
        type : 'input',
        message:'What is the usage information for your project?',
    },
    {
        name : 'cGuidelines', 
        type : 'input',
        message:'What are the contribution guidelines for your project?',
    },
    {
        name : 'test', 
        type : 'input',
        message:'What are the test instructions for your project?',
    },
    {
        name : 'license', 
        type : 'list',
        message:'What is the licence for your project?',
        choices: ['MIT', 'GNU', 'OTHER']
    },
    {
        name : 'github', 
        type : 'input',
        message:'What is your github username?',
    },
    {
        name : 'email', 
        type : 'input',
        message:'What is your email?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    //Start the inquirer prompts
    inquirer.
        prompt(questions)
        .then((data) => {
            console.log(data);
        })
}

// Function call to initialize app
init();
