//JS is a Synchronous and single threaded language
// setTimeout(function(){
//     console.log("Timer");
// },5000); //after 5 sec -> timer

// function x(y){
//     console.log("X called");
//     y();
// }

// x(function y(){
//     console.log("Y Called");
// })

//Deep about event listeners
// let count = 0;
// document.getElementById("clickMe").addEventListener("click", function xyx(){
//     console.log("Button Clicked", ++count);
// });

//Closures with EventListeners
function attachEventListeners(){
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function xyx(){
    console.log("Button Clicked", ++count);
    });
}
attachEventListeners();


