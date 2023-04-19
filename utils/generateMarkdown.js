// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) return ''
  return `https://img.shields.io/badge/license-${license}-blue`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  let markdown = 
  `
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Test Instructions](#test-instruction)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.cGuidelines}
  ## Test Instructions
  ${data.test}
  `;

  return markdown
}

module.exports = generateMarkdown;
