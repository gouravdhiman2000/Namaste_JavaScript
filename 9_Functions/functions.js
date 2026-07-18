//function statement or function declarartion
function a(){
    console.log("A called");
}
a();

//function Expression
var b = function(){
    console.log("B called");
}
b();

//Anonymous function - function without name, used in place where func. are used as value
// function (){

// }

//Named function Expression
var c = function xyz(){
    console.log("C called");
}
c();
//xyz(); //Reference Error : xyz is not defined

//Difference between parameters and Arguments
var d = function(param1, param2){
    console.log("D called" , param1, param2);
}
d(1,2);

//First class function
//The ability of func. to used as a value ans store in variable to pass to another func., passing a function inside another function arguments and return a function from a function

var e = function(param1){
    return function def(){

    }
}
console.log(e());


