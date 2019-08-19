// Understanding JS Scope

var a = 1;
b = 2;

function func() {
    var c = 3;
    d = 4;
    if(d == 4) {
       var e = 6;
        f = 7;
       }
    
    console.log(b);
    console.log(window.b)
 
}

func();


// what will show here ?
function func1() {
    console.log(c);
    var c = 3;
}

func1();