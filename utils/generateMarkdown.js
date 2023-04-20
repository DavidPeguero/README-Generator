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
  switch(license){
    case 'Apache':
      return `https://www.mend.io/resources/blog/top-open-source-licenses-explained/#The_Apache_Licence`
    case 'MIT':
      return `https://www.mend.io/resources/blog/top-open-source-licenses-explained/#MIT_License`
    case 'BSD':
      return `https://www.mend.io/resources/blog/top-open-source-licenses-explained/#Berkeley_Software_Distribution_BSD`
    case 'Unlicensed':
      return ``
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) return 'nothing'
  return `[![](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdown = 
  `
  # ${data.title}
  ${renderLicenseSection(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Test Instructions](#test-instructions)
  5. [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.cGuidelines}
  ## Test Instructions
  ${data.test}
  ## Questions
  If you would like to reach me, contact me using my GitHub or Email address:

  GitHub: [${data.github}](https://github.com/${data.github})

  Email: [${data.email}](${data.email})
  `;

  return markdown
}

module.exports = {
  generateMarkdown,
  renderLicenseSection  
}
