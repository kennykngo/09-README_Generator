function generateMarkdown(res) {
  return `
# ${res.data.login}

## Description 
`;
}

module.exports = generateMarkdown;
