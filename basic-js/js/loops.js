// 3 ways to do for loop

console.log("====== basic For loop =======");

var arr = ['a', 'b', 'c','d'];
for(var i = 0; i < 4; i++){
    console.log(arr[i]);
}

console.log("====================");


// Javascript's 'in' operator does not check if a value is contained in an array. It checks if the object has a property or index 

// The in operator doesn't do what you're thinking it does. The in operator returns true if the specified operand is a property of the object. For arrays, it returns true if the operand is a valid index (which makes sense if think of arrays as a special-case object where the properties are simply named 0, 1, 2, ...)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators

for(let index in arr){
    console.log(arr[index]);
}

// show example of array length

//arr.length;
//console.log(arr);

console.log("======= Callback function =========");

// callback function

// The forEach() method executes a provided function once for each array element.
arr.forEach(function(item){
    console.log(item);
});

