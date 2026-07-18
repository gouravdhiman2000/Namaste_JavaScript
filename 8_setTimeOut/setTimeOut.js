console.log("Start");

// setTimeout(function cb(){
//     console.log("CallBack");
// },5000);

//or
function cb(){
    console.log("CallBack");
}

setTimeout(cb, 5000);

let startDate = new Date().getTime();
let endDate = startDate;

while(endDate < startDate + 10000){
    endDate = new Date().getTime();
}

console.log("While Expires");