const arr = [5,1,2,3,6];
//Double
function double(x){
    return x * 2;
}
const o1 = arr.map(double);
console.log(o1);

//triple
function triple(x){
    return x * 3;
}
const o2 = arr.map(triple);
console.log(o2);

//Binary
function Binary(x){
    return x.toString(2);
}
const o3 = arr.map(Binary);
console.log(o3);

//filer -> odd and even values
function isOdd(x){
    return x % 2;
}
function isEven(x){
    return x % 2 == 0;
}

const o4 = arr.filter(isOdd);
console.log(o4);

//reduce -> used where we have to iterate over all values and return a single value eg-> sum or max value

function findSum(arr){
    let sum = 0;
    for(let i=0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(findSum(arr));

const o5 = arr.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
},0);
console.log(o5);

function findMax(arr){
    let max  = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max  = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));

const o6 = arr.reduce(function(max, curr){
    if(curr > max){
        max = curr;
    }
    return max;
},0);
console.log(o6);


const users = [
    {firstName : "Gourav", lastName : "Dhiman", age : 26},
    {firstName : "Gargi", lastName : "Attri", age : 23},
    {firstName : "Ridhima", lastName : "Attri", age : 20},
    {firstName : "Keshav", lastName : "", age : 26},
];

//list of fullNames
const o7 = users.map(x => x.firstName + " " + x.lastName);
console.log(o7);

//find out how many people with particular age
const o8 = users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
}, {}); //Initial value -> Empty Object
console.log(o8);

//find the firstName from users[] where age < 30
const o9 = users
        .filter((x) => x.age < 30)
        .map((x) => x.firstName);
console.log(o9);

const o10 = users.reduce(function(acc, curr){
    if(curr.age < 30){
        acc.push(curr.firstName)
    }
    return acc;
}, []);