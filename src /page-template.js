// const generatePage = () => 'Name: Jane, Github: janehub';
// console.log(generatePage());

// Same function as above but now using template literial 
// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// console.log(name, github);
// console.log(generatePage(name, github));

// 9.2.4: Same function as above but now using multi-line input 
const generatePage = (name, github) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
    </head>
    
    <body>
        <h1>${Lizette}</h1>
        <h2><a href="https://github.com/${Github}">Github</a></h2>
    </body>
    </html>
    `;
};

module.exports = generatePage;

