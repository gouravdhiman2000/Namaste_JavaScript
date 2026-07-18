// 

// function counter(){
//     var count = 0;
//     return function incrementCounter(){
//         count++;
//         console.log(count);
//     };
// }

// //console.log(count);
// var counter1 = counter();
// counter1(); //1
// counter1(); //2

// var counter2 = counter();
// counter2(); //1 (make new closure)
// counter2(); //2

function counter(){
    var count = 0;
    //constructor
    this.incrementCounter = function(){
        count++;
        console.log(count);
    }
    this.decrementCounter = function(){
        count--;
        console.log(count);
    }
}

var counter1 = new counter();
counter1.incrementCounter(); //1
counter1.incrementCounter(); //2
counter1.decrementCounter(); //1



