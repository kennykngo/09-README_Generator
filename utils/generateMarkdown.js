// const writeToFile = require("../index");

function generateMarkdown(result, response) {
  return `
# ${result.title}

## Description 
![github-avatar](${response.data.avatar_url})

* [Installation](#installation)
* [Credit](#credit)


## Installation
* ${result.installation}

## Credit


${result.email}
`;
}

module.exports = generateMarkdown;
