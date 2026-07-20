const API_URL = "https://api.github.com/users/gouravdhiman2000";

async function handlePromise(){
    try{
        const data = await fetch(API_URL); //fetch returns a promise when resolved (res.json()) , json again returns a promise
        const jsonValue = await data.json();
        console.log(jsonValue);
    }
    catch(err){
        console.log(err);
    }
}
handlePromise();