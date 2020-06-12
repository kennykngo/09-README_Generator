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
    name: "username",
    message: "Enter GitHub username",
    default: "kennykngo",
  },
];

function writeToFile(fileName, data) {
  inquirer.prompt(questions).then(function (result) {
    console.log(result);
    const genREADME = generateMarkdown(result);
    axios
      .get(`https://api.github.com/users/${result.username}`)
      .then(function (response) {
        console.log(response);
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
