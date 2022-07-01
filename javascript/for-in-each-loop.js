/* The for… in Loop:-
It is a special type of loop, used when we want to iterates over the properties of an object or the elements of an array. The syntax for using the for-in loop is: 

for (variable in object) {
  // Code to be executed
}

*/

let obj = {
  name: "Rohan Das",
  age: 78,
  type: "Dangerous Programmer",
  os: "Ubuntu",
};

for (let key in obj) {
  console.log(`The ${key} of object is ${obj[key]}`);
}
/* The for
Each loop : -
In JavaScript, the  forEach is a type of loop that is used for Array method. With the help of forEach loop, we can execute a function on each item within an array. The function can only be used on Arrays, Sets, and Maps. */

let arr = [2, 5, 6, 4, 2, 3];

arr.forEach(function (element) {
  console.log(element);
});

arr.forEach(function (element, index, array) {
  console.log(element, index, array);
});

/*  for (let i = 0; i < arr.length; i++) {
     const element = arr[i];
     console.log(element)
 } is same as this 

*/

/* JavaScript template literals:-
Prior to ES6, we use single quotes (') or double quotes (") to wrap a string literal. At that time, the strings have very limited functionality. To help us in solving more complex problems, ES6 template literals provide the syntax that allows you to work with strings in a much cleaner way. In ES6, we can create a template literal by wrapping the string in backticks as follows: */

let simple = `This is an example of
                     Template literal`;
/* Following are the features of javascript template literals:

We can write a Multiline string
It provides the ability to substitute part of the string for the values of variables or expressions. This feature is also called string interpolation.
It provides the ability to transform a string so that it is safe to include in HTML. */

let firstName = "Code With",
  lastName = "Harry";
let greeting = `Welcome to ${firstName} ${lastName}`;
console.log(greeting);
