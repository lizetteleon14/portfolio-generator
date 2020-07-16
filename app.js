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

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));

