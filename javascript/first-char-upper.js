var namei = prompt("What is your name?");
namei = namei.toLowerCase();
var f = namei.slice(0, 1);
alert("Hello, " + f.toUpperCase() + namei.slice(1));
