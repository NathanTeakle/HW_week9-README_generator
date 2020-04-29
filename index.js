// Defining constant references to values.
const inquirer = require("inquirer");
const fs = require("fs");
//const utils = require("utils");

// Inquirer prompts to guide file Generation.
inquirer.prompt([{
        type: "input",
        name: "UsernameQuestion",
        message: "Enter your Github username:",
    },
    {
        type: "input",
        name: "RepoUrl",
        message: "Enter desired Github Repository URl:",
    },
    {
        type: "input",
        name: "ProjectTitle",
        message: "Enter the Projects Title:",
    },
    {
        type: "input",
        name: "ProjectDescription",
        message: "Enter a Description of the Project:",
    },
    {
        type: "input",
        name: "ProjectImage",
        message: "Add the URL for your Image:",
    },
    {
        type: "input",
        name: "InstallationProcess",
        message: "Add Installation steps:",
    },
    {
        type: "input",
        name: "ProjectUsage",
        message: "Add Project Usage details:",
    },
    {
        type: "list",
        name: "UsedLicenses",
        message: "Reference any Licenses used:",
        choices: ["Apache License 2.0", "Mozilla Public License", "GNU Library", "none"]
    },
    {
        type: "list",
        name: "ProjectTesting",
        message: "Reference Testing details:",
        choices: ["npm", "none"]
    },
    {
        type: "input",
        name: "ProjectAuthor",
        message: "Add name of Project Author:",
    }, {
        type: "input",
        name: "ProjectAuthorEmail",
        message: "Add email of Project Author:",
    },

    // Code to compile inputs into outputs as a README File.

]).then(data => {
    const listTable = `
        * UsernameQuestion
        ${data.username}
        * RepoUrl
        * ProjectTitle
        * Project Description
        * ProjectImage
        * InstallationProcess
        * ProjectUsage
        * UsedLicenses
        * ProjectTesting
        * ProjectAuthor
        * ProjectAuthorEmail`;

    fs.writeFile("README_nt.md", listTable, function (err) {
        return console.log(err);
    });
});
