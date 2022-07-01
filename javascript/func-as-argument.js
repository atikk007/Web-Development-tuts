function calculator(num1, num2, operator) {
  return operator(num1, num2); //add(num, num2)
}

function add(num1, num2) {
  return num1 + num2;
}

calculator(5, 2, add);
