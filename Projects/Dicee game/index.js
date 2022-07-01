var imgArr = [
  "dice1.png",
  "dice2.png",
  "dice3.png",
  "dice4.png",
  "dice5.png",
  "dice6.png",
  "dice7.png",
  "dice8.png",
];
var basepath = "images/";

// document.querySelector(".img1").setAttribute("src", "images/dice1.png");

function clicked() {
  var ran = imgArr[Math.ceil(Math.random() * 5)];
  var ran2 = imgArr[Math.ceil(Math.random() * 5)];

  document.querySelector(".img1").src = basepath + ran;
  document.querySelector(".img2").src = basepath + ran2;

  if (ran > ran2) {
    document.querySelector("h1").textContent = "Player 1 Wins 🚀";
  } else {
    document.querySelector("h1").textContent = "Player 2 Wins 🚀";
  }

  if (ran == ran2) document.querySelector("h1").textContent = "It's a Draw!";
}

function refresh() {
  window.location.reload();
  document.querySelector(".img1").src = basepath + "dice1.png";
  document.querySelector(".img2").src = basepath + "dice1.png";
  // clicked();
}
