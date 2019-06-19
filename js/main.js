// js code
console.log('Hello World!');

let number = 5; // in-line comment
 /*
 Multi Line Comment
 */

// Data Types
/* 
        undefined, 
        null, 
        boolean, 
        string, 
        symbol, 
        number, 
        object. 
*/

let myName = "Robert";
myName = 8;
let ourName = "coding javascript";
const pi = 3.14 // const never changes

let a;
let b = 2;
a = 5;
let addab = a + b;
console.log(addab);
console.log(myName + a + b);


/* 
In the following code, you can see the boxed and unboxed versions of JavaScript primitives at work: 
*/

console.log("box and unbox versions of Javascript");

var numberOne = new Number(1);
var numberTwo = 2;

console.log("var numberOne returns typeof " + typeof numberOne); //returns 'object'
console.log("var numberTwo returns typeof " + typeof numberTwo); //returns 'number'

var numberThree = numberOne + numberTwo;
console.log("Interesting when you add numberOne + numberTwo and set that to var numberThree it also returns typeof " + typeof numberThree); //returns 'number'

/* 

Creating objects in JavaScript is trivial. This can be seen in the following code for creating an object in Javascript.

*/
console.log("creating an object in JavaScript");
var objectOne = {};
typeof objectOne; // returns 'object'
var objectTwo = new Object();
typeof objectTwo; // returns 'object'
