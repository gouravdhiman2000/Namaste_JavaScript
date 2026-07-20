const p = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise Resolved Value !!")
    }, 5000);
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
    const val = await p;
    console.log("JavaScript"); //Js Engine was waiting for promise to get resolved
    console.log(val);
}
handlePromise();

// const dataPromise = getData();
// console.log(dataPromise);

// dataPromise.then(res => console.log(res));