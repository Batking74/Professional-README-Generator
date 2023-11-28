// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  if(license === 'CC0-1.0') {
    badge = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]';
  }
  else if(license === 'MIT') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  }
  else if(license === 'Apache 2.0') {
    badge = '![Apache 2.0 License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  }
  else if(license === 'GPLv3') {
    badge = '![GPLv3 License](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;
  if(license === 'CC0-1.0') {
    link = '[CC0-1.0](http://creativecommons.org/publicdomain/zero/1.0/)';
  }
  else if(license === 'MIT') {
    link = '[MIT](https://opensource.org/licenses/MIT)';
  }
  else if(license === 'Apache 2.0') {
    link = '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
  }
  else if(license === 'GPLv3') {
    link = '[GPLv3](https://www.gnu.org/licenses/gpl-3.0)';
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license != 'None') {
    return (`
  ## License
  ### Notice: ${license}
  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}
    `)
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Questions
  - What was my motivation? ${data.question1}
  - Why did I build this project? ${data.question2}
  - What problem does ${data.title} solve? ${data.question3}
  - What did I learn? ${data.question4}

  GitHub: https://github.com/${data.github}

  Email: ${data.email}
  
  ## Installation
  ${data.installation}
  
  
  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.contributers}

  ${renderLicenseSection(data.license)}

  ## Tests
  ${data.tests}
`;
}

module.exports = {generateMarkdown};
