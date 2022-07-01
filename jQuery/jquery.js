$("h1").css("color", "red"); // .css("property", "value")

/*  is same as writing - document.querySelector("h1").style.color = "red"; */

$("button").css("color", "red"); // sets to all

// document.querySelectorAll("button")[i].style.color = "red"; same query but here we had to use loop

console.log($("h1").css("color")); // returns the "property" value

$("button").addClass("mgn50");

/*  same as writing document.querySelector("button").classList.add("mgn50"); */

var cls = $("button").hasClass("mgn50"); // returns true or false
console.log(cls);
$("h1").text("Bye");

/* Changing Attribute - */

/* document.querySelector("a").attributes; // returns list of all attribute of the dom obj

document.querySelector("a").getAttribute("href"); //returns the specified attribute value.

document.querySelector("a").setAttribute("href", "https://www.yahoo.com"); // changes attribute's value to specified  */

console.log($("a").attr("href")); //returns value of attribute

$("a").attr("href", "https://www.yahoo.com"); // changes attribute value to specified

console.log($("h1").attr("class")); // returns the value of class attribute i.e. all class list that is applied on that element.

/* for (var i = 0; i < 5; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    document.querySelector("h1").style.color = "purple";
  });
}  is same as - */

$("button").click(function () {
  $("h1").css("color", "purple");
});

$(document).keypress(function (event) {
  // since document are a part of jquery, no qoutation marks needed.
  $("h1").text(event.key);
});

/* Alternate way of above 

Syntax - $("element").on("event-type", function/trigger);
*/

$("h1").on("mouseover", function () {
  $("h1").css("color", "purple");
});
