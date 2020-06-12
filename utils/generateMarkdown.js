// const writeToFile = require("../index");

function generateMarkdown(data) {
  return `
# ${data.title}

## Description 

* [Installation](#installation)

## Installation

`;
}

module.exports = generateMarkdown;
