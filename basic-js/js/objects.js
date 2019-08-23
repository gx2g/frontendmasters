// Objects the this, functions

// Objects and functions in many ways are same subject


// 1) first topic to discus object and the dot. 
// Remember when we spoke about objects we said they are simply name value pairs and in the values we can have other collections name value pairs. 

// so lets look at it like this as well. Different repsective

// How an Object lives or resides in memory
// An Object is a collection of values that are given names. But what values are we talking about. 

// An object can have properties and methods, primitative sitting off of it. that's call a perperty. 
// An object can have another object connected to it as a child this is also a property. 
// An object can have a function connected to it called a method. 

// so properties and methods

// sitting in memory

// object has references to the space or spot where those addresses live. 

// pimative, objects and methods make up an object. 

var person = new Object();
// there are better ways to do this but for this moment i'm using the new Object because it's obvious on what's going on. 

// comuted member access operator
person["firstName"] = "Bob"; // first name properity // primiative 
person["lastName"] = "Roberts";

// check Javascript Operator Precedence in google
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table

var firstNameProperty = "firstName"; // I could set a string and use that string to see the value
console.log(person);
console.log(person[firstNameProperty]); // string firstNameProperty is looked for and the value is printed with operator.

// lets talk about another operator much clearer and easier to type.

// the dot operator


// member access operator
console.log(person.firstName);
console.log(person.lastName);
// check operator precedence chart
// don't have to put it in quotes but that's what it's doing. the dot is an operator function

person.address = new Object();
person.address.street = "123 lane ave";
person.address.city = "Los Angeles";
person.address.state = "California";
// left to right associativity


console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);




// In Javascript, this pointer is another difficult topic, to tackle this topic, we just have to understand the following rules.
// This always points to the object that calls current function

// Object literal


// 

(function(){
    
    // object literal
    // this has access to it's parents properties
    
    var person = {
        name:'John Doe',
        age: '20',
        greeting: function(greet) {
            console.log(greet + 'I am ' + this.name + ' and i am ' + this.age + 'years old.');
        }
    }
    // passing 'hi' using the dot notation into the function
    person.greeting('Hi');
    
    
    
})();