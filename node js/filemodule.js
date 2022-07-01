// OS modules

/* const os = require('os');

console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.platform());
console.log(os.release()); */

// Path Modules

/* const path = require('path');

let a1 = path.basename(`C:/Users/acer/Desktop/temp/modules.js`);

console.log(a1);

console.log(path.extname(__filename)); */

// Fs - fileSystem Modules

const { deepStrictEqual } = require('assert');
const fs = require('fs');

// Asyncronous - wouldn't block process while file  is reading
/* fs.readFile('./ textFile /file.txt', 'utf8', (err, data) => {
    console.log("Err : " + err, "\nData : " + data);
}); */


// Syncronous way of reading a file, this will not move too next instruction until the file is read 

const a1 = fs.readFileSync('./docs/log.txt')

console.log(a1.toString());

/* Here to string is used because we didn't tell character encoding before and it returns us the ascii buffer that's why tostring() func is used. ) */


const a2 = fs.readFileSync('./docs/log.txt', 'utf8');

console.log(a2);
console.log("finished reading file");

fs.writeFile('./docs/log2.txt', "This is a data", () => {
    console.log("Asynchronous file written")
});

fs.writeFileSync('./docs/log2.txt', "This is synchrounous data writing");

console.log("Finished writing file")