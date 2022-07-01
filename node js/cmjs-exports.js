/* Exporting Single function or Object */

/* atik = {

    name: "Atik Mansuri",
    favNum: 3,
    developer: true
}

module.exports = atik; */

/* Exporting multiple functions */

function method() {
    console.log("This is a method function");
}

function otherMethod() {
    console.log("This is another method function");
}

module.exports = {
    method,
    otherMethod
}