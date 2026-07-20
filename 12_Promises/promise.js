const cart = ["shoes", "laptop", "mobile phone", "watch"];

//Consuming Promise
const promise = createOrder(cart); //return a promise -> orderID
console.log(promise);

promise
    .then(function(orderID){
        console.log(orderID);
        return proceedToPayment(orderID);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo);
        return showOrderSummary(paymentInfo);
    })
    .then(function(orderSummary){
        console.log(orderSummary);
    })
    .catch(function(err){
        console.log(err.message);
    });

//Producing Promise
function createOrder(cart){
    const pr = new Promise(function (resolve, reject){
        //validateCart -> createOrder -> orderID
        if(!validateCart(cart)){
            return reject(new Error("Cart is not Valid"));
        }
        //logic for createOrder
        const orderId = "12345"; //dummy orderId
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            }, 5000); //after 5 sec -> orderId is creating
        }
    });
    return pr; //returning a promise -> orderID
}

function validateCart(cart){
    return true;
}

function proceedToPayment(orderID){
    return new Promise(function (resolve, reject){
        resolve("Payment Successful")
    });
}

function showOrderSummary(paymentInfo){
    return new Promise(function (resolve, reject){
        resolve("Order details are : UPI Id: XXXXXXX, Item : XXXXX");
    });
}
