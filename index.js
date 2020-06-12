const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "username",
    message: "Enter GitHub username.",
  },
  {
    type: "input",
    name: "title",
    message: "Enter project title.",
  },
];

// function writetoFile(fileName, data) {}

function init() {
  inquirer.prompt(questions).then(function (res) {
    // console.log(res);
    axios
      .get(`https://api.github.com/users/${res.github}`)
      .then(function (res) {
        console.log(res);
        console.log(generateMarkdown(res));

        //         var README = `
        // # username: ${res.data.login}
        // url: ${res.data.url}
        // \n
        // avatar url: ${res.data.avatar_url}
        //       `;
        // return README;
      })
      .then(function (data) {
        fs.writeFileSync("./README.md", data, (err) => {
          if (err) throw err;
          // console.log(err);
          console.log("failed");
        });
      });
  });
}
init();
