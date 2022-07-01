var arr = ["Atik", "Yagami", "Chandler", "Joey", "Pheobe"];

var user = prompt("Enter your name : ");

arr.includes(user);

if (arr.includes(user)) {
  console.log(user + " exists in array.");
} else console.log("Doesn't exist in array");
