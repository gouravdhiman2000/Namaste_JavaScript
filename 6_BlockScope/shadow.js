// let a = 10;

// {
//     var a = 20; // ❌ Illegal shadowing
// }

// let a = 10;

// {
//     let a = 20; // ✅ Legal
//     console.log(a); // 20
// }

// console.log(a); // 10

var a = 10;

{
    let a = 20; // ✅ Legal
    console.log(a); // 20
}

console.log(a); // 10