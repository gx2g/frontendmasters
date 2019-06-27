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

/* creating objects in JavaScript is trival. This can be seen in the following code for creating an object in JavaScript */

var objectOne = {};
typeof objectOne // returns 'object'
var objectTwo = new Object();
typeof objectTwo; // returns 'object'

/* JavaScript is a dynamic language, adding properties to objects is also quite easy. This can be done even afer the object has been created. The following code creates */

var objectOne = { value : 7}; // object array with perperties declaration
var objectTwo = {}; // create an empty array object declaration
objectTwo.value = 8; // use dot notation to assign a value

