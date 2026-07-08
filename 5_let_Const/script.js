console.log(b); //u.d
//console.log(a); //cannot access 'a' before initialization because 'a' is in Temporal dead zone
let a = 10;
var b = 100;
console.log(x); //ReferenceError , x is not defined

//let a = 100; //Syntax Error 

//const c;
c=10; //missing initializer
c=100; //TypeError