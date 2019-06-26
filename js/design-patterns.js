// Objects in JavaScript

// Undefined
// Null
// Boolean
// String
// Number

/* In the following code, you can see the boxed and unboxed versions of JavaScript
primitives at work: */

var numberOne = new Number(1);
var numberTwo = 2;

typeof numberOne; // returns 'object'
typeof numberTwo; // returns 'number'
var numberThree = numberOne + numberTwo;
typeof numberThree; // returns 'number'

console.log("=============================");
console.log("numberOne + numberTwo = " + numberThree);
console.log("=============================");