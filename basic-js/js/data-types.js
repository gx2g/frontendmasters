// first thing is to connect the main.js to the page. 
console.log("Yes main.js is connected!");  // console.log to see it in chrome. 

// Data Types

// Number, String, Boolean, Null, Undefined, Object (all primitive types except Object)

var length = 16;                // number
var lastName = 'Johnson';       // string
var lastNmae = "Johnson";       // string

// Object Literal
var p = {firstName: 'John', lastName: 'Doe'};   // object
console.log(p.firstName + ' ' +  p.lastName);

var whatisV = p;
console.log(whatisV);

// Booleans
var isGood = true;              // boolean
var isPlenty = true;            // boolean

var isGoodAndPlenty = isGood && isPlenty;    //boolean

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

console.log(isGoodAndPlenty);


// Null vs Undefined
var a = null;
var whatisA = typeof a;
console.log(whatisA);


// Arrays
var arr = [];                                       // empty array
var arr1 = [1,2,3];                                 // basic array
var arr2 = [1,2,3,'John', 'richard', 'bob'];        // mixed data in array


// function Invocation means calling the function. Invoking the function
// Execution Stack

// Invocation in javascript, by using parenthesis

function say(){
    console.log("I am a function");
}
say();


// function experssion
var say = function() {
    return 'I am a function expression';
}

console.log(say);


// Statements and Expression Statements

// https://dev.to/promhize/javascript-in-depth-all-you-need-to-know-about-expressions-statements-and-expression-statements-5k2

// by the end of this mini lesson you should be able to explain why this works

{} + 1;         // 1
{2} + 2;        // 2
{2+2} + 2;      // 2
{3+3} - 3;      // -3

// there are two manjor categories in javascript 
// 1. Statements
// 2. Expressions

// Expressions are Javascript code snippets that result in a single value. Expressions can be as long as you want them to be, but they would always result in a single value.


// 2 + 2 * 3 / 2
// (Math.random() * (100 - 20)) + 20
// functionCall()
// window.history ? useHistory() : noHistoryFallback()
// 1+1, 2+2, 3+3
// declaredVariable
// true && functionCall()
// true && declaredVariable

// All of the above are expressions, and can appear anywhere Javascript expects a value. So that the argument to console.log below, resolves to a single value, that is logged to the console.

console.log(true && 2 * 9) // 18

// Expressions don’t necessarily change the state

const assignedVariable = 2; //this is a statement, assignedVariable is state

assignedVariable + 4 // expression

assignedVariable * 10 // expression

assignedVariable - 10 // expression

console.log(assignedVariable) // 2

console.log("=============== End of Data Types ================");
