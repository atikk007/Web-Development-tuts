var people = ["Atik", "Yagami", "Chandler", "Joey", "Pheobe"];

console.log(whoispaying(people) + " is paying today.");

function whoispaying(people) {
  var numberofpeople = people.length;

  var randomposition = Math.floor(Math.random() * numberofpeople);

  var randomperson = people[randomposition];

  return randomperson;
}
