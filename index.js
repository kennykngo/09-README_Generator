const fs = require("fs");
const questions = ["What is your GitHub username?"];

const md = [];

function writeToFile(fileName, data) {
  fs.writeFile("./README.md", md.trim(), (err) => {
    if (err) {
      throw err;
    }
    console.err;
  });
}

function init() {}

init();
