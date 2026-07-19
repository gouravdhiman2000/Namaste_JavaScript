//Hof -> A function which take argument as a function and return a function from it
function x(){
    console.log("JavaScript");
}

function y(x){ //y-> HOF , X-> is callback function
    x();
}

y(x);

const radius = [3,1,2,4];
//Task to calculate Area of given radius array
const calculateArea = function(radius){
    const output = [];
    for(let i=0; i < radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
};
console.log(calculateArea(radius));

//Task to calculate circumference of given radius array
const calculatecircumference = function(radius){
    const output = [];
    for(let i=0; i < radius.length; i++){
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
};
console.log(calculatecircumference(radius));

//Task to calculate diameter of given radius array
const calculatediameter = function(radius){
    const output = [];
    for(let i=0; i < radius.length; i++){
        output.push(2* radius[i]);
    }
    return output;
};
console.log(calculatediameter(radius));


