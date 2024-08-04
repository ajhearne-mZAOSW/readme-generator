function generateREADME(userInputs) {
    return `
# ${userInputs.title}

![badge](https://img.shields.io/badge/license-${userInputs.license}-brightgreen)

## Description

🔍 ${userInputs.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${userInputs.installation}

## Usage

${userInputs.usage}

## License

![badge](https://img.shields.io/badge/license-${userInputs.license}-brightgreen)

This project is covered under the ${userInputs.license} license.

## Contributing

${userInputs.contributing}

## Tests

${userInputs.tests}

## Questions

${userInputs.questions}

Find me on GitHub: [${userInputs.username}](https://github.com/${userInputs.username}).

For any further questions about ${userInputs.title}, send an email to: [${userInputs.email}](mailto:${userInputs.email}).
    `;
}
module.exports = generateREADME;