/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to
 * write any Karel program you want.
 **/

/* https://stanford.edu/~cpiech/karel/ide.html */

function main() {
  row1();
  row2();
  row1();
  row2();
  row1();
}
function row1() {
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
}

function row2() {
  turnLeft();
  move();
  turnLeft();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  turnRight();
  move();
  turnRight();
}
