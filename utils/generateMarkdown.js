// const writeToFile = require("../index");

function generateMarkdown(result, response) {
  return `
# ${result.title}
![github-avatar](${response.data.avatar_url}?s=100x100)

## Description 
> ${result.description}

## Table of Contents
* [Installation](#installation)
* [Credit](#credit)
* [Usage](#usage)
* [License](#license)

## Installation
${result.installation}

## Credit
${result.credit}

## Usage
${result.usage}

## License
${result.license}

## Badges
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

[Email me!](mailto:${result.email})
---
© 2020 

`;
}

module.exports = generateMarkdown;
