// // Needed to us the fs module: The require statement is a built-in function that's globally available in Node.js. It allows the app.js file to access the fs module's functions through the fs assignment.
// const fs = require('fs');

// // With this statement, the object in the module.exports assignment will be reassigned to the generatePage variable in the app.js file.
// const generatePage = require('./src/page-template.js');


// // Array which holds the user command-line arguments.
// const profileDataArgs = process.argv.slice(2);

// // Array that holds the name and github entry 
// // Use assignment destructuring-which assigns elements of an array to variable names ina single expression
// const [name, github] = profileDataArgs;

// // If err exists, an error message is displayed, using the following statement: Rather than silently displaying the error with console.log(err);, the preceding statement creates an exception and stops the execution of the code.
// fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw err;

// // statement is a console.log() success statement that directs users to inspect the newly created file.
//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username'
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ]);
};

const promptProject = (portfolioData) => {
    // If there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }

    console.log(`
    =================
    Add a New Project
    =================`
    );

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: projectName => {
                if (projectName) {
                    return true;
                } else {
                    console.log('Enter project name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionName => {
                if (descriptionName) {
                    return true;
                } else {
                    console.log('Enter a description');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: githubLink => {
                if (githubLink) {
                    return true;
                } else {
                    console.log('Enter GitHub link');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            validate: confirmProject => {
                if (confirmProject) {
                    return true;
                } else {
                    console.log('Enter Y or N');
                    return false;
                }
            }
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
        } else {
        return portfolioData;
        }
    });
}

promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });
