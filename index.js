const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "github",
    message: "Enter GitHub username.",
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
        var README = `
# username: ${res.data.login}
    
url: ${res.data.url}
\n
avatar url: ${res.data.avatar_url}

      `;

        return README;
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
