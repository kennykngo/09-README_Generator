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
    name: "installation",
    message: "What code do you need to get project started?",
    default: "NodeJS",
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
