/* querySelector("class/id/tagname/element-name/multiple selectors altogether") The querySelector() method returns the first element that matches a CSS selector.

To return all matches (not only the first), use the querySelectorAll() instead.

Both querySelector() and querySelectorAll() return a NodeList. 

Eg - document.querySelector(".btn #id").length; //returns length of that object
or document.querySelector("li").style.color =  "red";  // changes color of first li. 
or document.querySelectorAll("li")[index of li].style.color =  "red"; //returns array of all li from which we can choose one li with [] selector. 
*/

/* 

/* The getElementsByClassName() method returns a collection of elements with a specified class name(s).

The getElementsByClassName() method returns an HTMLCollection (even if there is only one class with that name, so we must have to use array [] selector with it).
*/

/* The getElementsByTagName() method returns a collection of all elements with a specified tag name.

The getElementsByTagName() method returns an HTMLCollection.

Eg -  document.getElementsByTagName("li").length;
*/

/* The getElementsByName() method returns a collection of elements with a specified name.

The getElementsByName() method returns an HTMLCollection.

eg - document.getElementsByName("animal").length;
*/

/* he getElementById() method returns an element with a specified value.

The getElementById() method returns null if the element does not exist.

eg - document.getElementById("demo");

*/

// We can do something like this too
// const myElement = document.getElementById("demo");
// myElement.style.color = "red";

document.querySelectorAll("li")[2].style.color = "red";
document.querySelector(".btn").style.backgroundColor = "yellow";
document.querySelector(".btn").style.fontSize = "2rem";

/* Why we wrote backgroundColor instead of background-color as we normally write in CSS?
This is because js follows camelCasing, in this the first word is small and second word start with Capital letter, thats why property names are like this

Also, Why is fontSize written in " x rem" quotation marks? It is because in js we write it like as a string. */

/* Adding/Removing or Toggling class in DOM */

document.querySelector("h1").classList.add("huge"); // will add huge class from button
document.querySelector("h1").classList.remove("huge"); // will remove huge class in button
document.querySelector("h1").classList.toggle("huge");
// the class list only works on DOM objects (HTML element)
