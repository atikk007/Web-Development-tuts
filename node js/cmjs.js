/* For Single Module  */

/* const atik = require("./server");

console.log("hello world" + atik) */


const myModule = require('./cmjs-exports.js');
const method = myModule.method;
const otherMethod = myModule.otherMethod;

console.log("Method :" + method, "Other-Method :" + otherMethod)
// OR:
// const { method, otherMethod } = require('./cmjs-exports.js');