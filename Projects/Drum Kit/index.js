document.querySelector("button").addEventListener("click", handleclick);

/* Why are we invoking function handleclick() without parenthesis? 
This is because if we use () then js will run it as normal function call and it'll run even without click event but we only want to call this function when the event click happens. Thats why parenthesis are avoided. */

var numberofdrums = document.querySelectorAll(".drum").length; // return all button with class rum then we find length (number of them) with the help of .length property

for (var i = 1; i < numberofdrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);
}

function handleclick() {
  var btninnerhtml = this.innerHTML;

  makesound(btninnerhtml);
  customanimation(btninnerhtml);
}

/* for (var i = 0; i < numberofdrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    console.log(this);
    this.style.color = "white";
  });
} */

/* You can see here instead of calling function, we defined it inside event listener itself. This type of definition (function without any name) is known as anonymous function. These are used when the small case is small and limited.

What is the this keyword?
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
*/

/* the parameter inside event listeners function returns the event which triggered the eventlistener (parameter name can be anything).

/* It is different from this keyword because this returns the element which triggered the eventlistener (also obv this have other use cases too)

*/

document.addEventListener("keypress", function (event) {
  makesound(event.key); // key is a property of event which gives exact key value which initiated the event. while event returns the whole pointer with multiple property other than key
  customanimation(event.key);
});

function makesound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(btninnerhtml);
  }
}

function customanimation(key) {
  var activebutton = document.querySelector("." + key);
  activebutton.classList.add("pressed");

  setTimeout(function () {
    activebutton.classList.remove("pressed");
  }, 100);

  /* . + key because we need to add class in the element and we have added class in each button with their respective names.we can't add class with just single word that out key hold (i.e. w or a or etc) we need to tell js where those words are that's why class is used.
  
  Prior it was not used because we could easily run switch based on key alone*/
}
