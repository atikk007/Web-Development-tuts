// const simple = require('./es6-export.mjs'); doesn't work in mjs

// import { simple, simple2 } from "module";

/* import simple from "./es6-exports.mjs"; /* this syntax (without {}) can only be use if we have selected a default export in our exporting file 
which is done like - export "default" function x().so, now whether some other function is exported or not, this will definitely get exported. 
*/

import * as a2 from "./es6-export.mjs"; //  * - imports all.

// simple()

console.log(a2.simple(), a2.simple2());

/* console.log is logged. it is showing undefined because our function are not returning anything. You can try returning something from them and undefined will get replaced by it */ 