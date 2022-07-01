/* Creating a JavaScript Object
With JavaScript, you can define and create your own objects.

There are different ways to create new objects:

Create a single object, using an object literal.
Create a single object, with the keyword new.
Define an object constructor, and then create objects of the constructed type.
Create an object using Object.create(). */

// Using an Object Literal

var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  move: function () {
    // object method
    alert("May i move this for you");
  },
};

person.age = 100;

/* JavaScript Objects are Mutable
Objects are mutable: They are addressed by reference, not by value.

If person is an object, the following statement will not create a copy of person:

const x = person;  // Will not create a copy of person. */

/* Notes
It is considered good practice to name constructor functions with an upper-case first letter.

About this
In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created. */

// Constructor Function - (Good practice to keep first word capital of contruct func name)
function Person(first, last, age, arr) {
  this.firstName = first; // this will be object i.e. p1.firstName = parameter passed will be stored for p1.
  this.lastName = last;
  this.age = age;
  this.arr = arr;
  this.nationality = "English";
  this.love = function () {
    // object methods
    alert("Hello love");
    normal();
  };
}

// Creating object of constructor function -

var p1 = new Person("Atik", "Mansuri", 38, ["black", "blue", 19]);

p1.firstName = "Soham";

function normal() {
  // normal function
  alert("Normal called");
}
p1.love(); // calling method
person.move();
