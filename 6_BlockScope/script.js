// if (true){
//     var a = 10;
//     console.log(a);
// }

let b = 100;
var a = 100;
{
    var a = 10; //this var variable shadows the outside var, modify the value, both are refering to same memory space i.e -> Global Space
    let b = 20; 
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a); //10 
console.log(b); //100
