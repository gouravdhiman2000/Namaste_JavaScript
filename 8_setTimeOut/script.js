// function x(){
//     var i=1;
//     setTimeout(function(){
//         console.log(i);
//     },2000);
//     console.log("SetTimeOut"); //print instantly and value of i prints after 2 sec
// }
// x();

// function y(){
//     for(let i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i * 1000); // Output -> 5 times 6 because var i refer to same reference in memory
//     } // make i let -> 1 2 3 4 5
// }
// y();

for(var i=1; i<=5; i++){
    function close(i){ //Act as an Closure -> closure make a new copy of (x) everytime setTimeOut is called
        setTimeout(function(){
            console.log(i);
        }, i * 1000);
    }
    close(i);
}

