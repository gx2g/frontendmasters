/*
concept or an ideal that is fundemental to the rest of of the course to understanding and building our knowledge of javascript. 

Syntax Parsers,
Execution Contexts and
Lexical Environments

These seem they are complicated sounding words, but they are pretty straight foward. 


====================================================================
Syntax Parser: A program that reads your code and determines what it does and if it's grammer is valid. Someone else has wrote a program to translate it for the computer. (interpiters and compilers) 


=======================================================================
Lexical Environment: Lexical means having to do with words or grammar. A lexical environment exists in programming languages in which where you write something is important. 

Code is translated into something the computer can understand. Where you see things writen gives you an idea of how it will be dealth with. We are talking about where it's written and what surounds it. 


==============================================================================
Execution Context: A wrapper to help you manage the code that is running.

There is a lots of lexical environments which one is currently running in managed via execution contexts. it can contain things beyond what you've written in your code. 

==============================================================================
Name / Value Pairs and Objects: 

A Name which maps to a unique value. 

That name my be definded more then once but it can only have one value in any given context. Remember we are talking about execution context. so any execution context that is a section of code that is running. A name can only exist and be defined with one value. however that value maybe more name value pairs. But that value could be other collections of name/values.

Address = '100 Main St."
 
*/









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

console.log(" ");
console.log("=============================");
console.log("numberOne + numberTwo = " + numberThree);
console.log("=============================");

/* creating objects in JavaScript is trival. This can be seen in the following code for creating an object in JavaScript */

var objectOne = {};
typeof objectOne // returns 'object'
var objectTwo = new Object();
typeof objectTwo; // returns 'object'

/* JavaScript is a dynamic language, adding properties to objects is also quite easy. This can be done even afer the object has been created. The following code creates */

var objectOne = { PropNameForVal : 7}; // object array with perperties declaration
var objectTwo = {}; // create an empty array object declaration
objectTwo.PropNameForVal = 8; // use dot notation to assign a value

console.log(" ");
console.log(objectOne);
console.log(objectTwo);


/* Objects contain both data and functionality. We've only seen the data part so far.
Fortunately, in JavaScript, functions are first class objects. Functions can be passed around and assigned to variables. Let's try adding some functions to an object, as seen in the following code: */


var myObject = {}; // creating empty object array

// using the dot notation with a value function 
myObject.myNameAssignment = function() { 
    console.log(" ");
    console.log("myNameAssignment Function using dot notation");
}
myObject.myNameAssignment(); // calling function


/* above syntex can be a bit painful to write so lets try this */
var myObject = { 
    myNameAssignment: function() {
        console.log("object array with function statement");
    }
}
myObject.myNameAssignment();


/* We can also mix data and functionality in an object */

// we create an object assign greetings 
var myObject = {
    greeting: "Hello World", // data
    myNameAssignment: function() { // functionality 
        console.log(this.greeting); // using .this qualifier to address variable within the myObject scope. 
    }
}
myObject.myNameAssignment();


/* This is also true if we have a number of functions within an Object */ 

var thingDoer = function(){
    this.greeting = "Robert";
    this.doThings = function() {
        console.log(this.greeting);
        this.doOtherThings();
    };
    this.doOtherThings = function() {
        console.log(this.greeting.split("").reverse().join(""));
    };
}
var instance = new thingDoer(); // creating new instance
instance.doThings();//prints hello world then treboR


/* This syntax allows for a constructor to be defined and for new objects to be created from this function. Constructors without return values are functions that are called as an object is created. In JavaScript, the constructor actually returns the object created. You can even assign internal properties using the constructor by making
them part of the initial function, as follows: */

var thingDoer2 = function(greeting){
this.greeting = greeting;
this.doThings = function() {
console.log(this.greeting);
};
}
var instance = new thingDoer2("hello universe");
instance.doThings();

