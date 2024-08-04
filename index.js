const fs = require("fs");
const inquirer = require("inquirer");
const generateREADME = require("./assets/js/generateREADME")

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "Enter the project title:"
        },
        {
            type: "input",
            name: "description",
            message: "Enter a brief description of your project:"
        },
        {
            type: "input",
            name: "installation",
            message: "Outline the installation process:"
        },
        {
            type: "input",
            name: "usage",
            message: "Outline the use cases of the project:"
        },
        {
            type: "list",
            name: "license",
            message: "Select the applicable project license:",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "List the contributors of the project:"
        },
        {
            type: "input",
            name: "tests",
            message: "Outline any tests and steps to run them:"
        },
        {
            type: "input",
            name: "questions",
            message: "Outline the steps to raise any questions and/or issues:"
        },
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address:"
        }
    ])
    .then((userInputs) => {
        const createREADME = generateREADME(userInputs);

        fs.writeFile('./dist/README.md', createREADME, (err) => {
            err ? console.log(err) : console.log('Successfully created README file!');
        });
    });