var bmi = bmicalc(65, 1.8);
console.log(Math.floor(bmi));

function bmicalc(weight, height) {
  return weight / (height * height);
}

/* Math.pow() - Math.pow(base, exponent)

base = The base number.

exponent = The exponent used to raise the base. */

/* Math.round() - Math.round(x) - The value of the given number rounded to the nearest integer.
eg Math.round(20.4) = 20
Math.round(20.6) = 21 */

/* Math.floor() - Math.floor(x) = A number representing the nearest integer less than or equal to the specified number.
eg Math.floor(20.4) = 20
Math.floor(20.9) = 20
*/

/* Math.ceil() - Math.ceil(x) = A number representing the nearest integer greater than to the specified number.
Math.ceil(20.4) = 21
Math.ceil(20.9) = 21 
*/
