/*
console.log in the command line:

for (let i = 0; i < 10; i++) {
    console.log("HELLO FROM FIRST SCRIPT!!!")
} 
*/

//************************************* */

/*
process.argv in the command line:

console.log("HELLO FROM ARGS!")
console.log(process.argv)
*/

//************************************ */

/* 
running a scipt using argv from the command line:

const args = process.argv.slice(2);
for(let arg of args) {
    console.log(`Hi there, ${arg}`)
}
*/

//************************************ */

/*Make a folder with empty files stored in it:

//Index of 2 means 3rd argument when running node (node, javascript file, argv or default of 'Project')
const folderName = process.argv[2] || 'Project'

const fs = require('fs');

//Empty string with double quotes required after string literal

/try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, "");
    fs.writeFileSync(`${folderName}/app.js`, "");
    fs.writeFileSync(`${folderName}/style.css`, "");
} catch(e) {
    console.log("Something went wrong :(");
    console.log(e);
}
*/

//************************************ */

//Creates an empty object in Node, from external js: 
/*
const { PI, square } = require('./math');
console.log(PI)
console.log(square(9))
*/

//Required an entire directory:

const family = require('./house')
console.log("REQUIRED ENTIRE DIRECTORY", family);



