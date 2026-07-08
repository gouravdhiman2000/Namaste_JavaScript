// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);
// z();

function z(){
    var a = 10;
    function x(){
        var b = 7;
        function y(){
            console.log(a);
            console.log(b);
        }
        y();
    }
    x();
}
z();