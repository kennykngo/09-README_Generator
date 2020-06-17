const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "username",
    message: "Enter GitHub username",
    default: "kennykngo",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    default: "fakedata@email.com",
  },
  {
    type: "input",
    name: "description",
    message: "Add a short description about your project.",
    default: "This project is about creating 'README.md' files",
  },
  {
    type: "input",
    name: "installation",
    message: "What code do you need to get project started?",
    default: "npm install",
  },
  {
    type: "input",
    name: "credit",
    message: "Add links or names of people you would like to credit. ",
    default: "Kenny Ngo: https://github.com/kennykngo",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide usage of the code.",
    default: "Project is used to generate 'README.md' easier.",
  },
  {
    type: "input",
    name: "license",
    message: "Let other developers know what they can and cannot do.",
  },
  {
    type: "confirm",
    name: "contributing",
    message: "Let developers know if how they can contribute",
    default: "Yes",
  },
];

function writeToFile(fileName, data) {
  inquirer.prompt(questions).then(function (result) {
    console.log(result);
    let genREADME;
    axios
      .get(`https://api.github.com/users/${result.username}`)
      .then(function (response) {
        console.log(response.data.avatar_url);
        console.log(response.data.email);
        genREADME = generateMarkdown(result, response);
      })
      .then(function (data) {
        fs.writeFileSync("./README.md", genREADME, (err) => {
          if (err) throw err;
          console.log("failed");
        });
      });
  });
}

function init() {
  writeToFile();
}

init();
