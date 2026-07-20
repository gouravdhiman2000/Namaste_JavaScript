const p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise Resolved Value of P1 !!")
    }, 5000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise Resolved Value of P2!!")
    }, 10000);
});

//handling promise normally
// function getData(){
//     //return "JavaScript"; // returning a value
//     //return p;
//     p.then((res) => console.log(res));
//     console.log("JavaScript"); //get instant output -> JS Engine will not wait for promise to be resolved and Promise resolved after 5 sec
// }


//handling Promise using async and await
async function handlePromise(){
    const val1 = await p1;
    console.log("JavaScript - 1"); //Js Engine was waiting for promise to get resolved
    console.log(val1);

    const val2 = await p2;
    console.log("JavaScript - 2"); //Js Engine was waiting for promise to get resolved
    console.log(val2);
}
handlePromise();

// const dataPromise = getData();
// console.log(dataPromise);

// dataPromise.then(res => console.log(res));