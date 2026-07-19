const GITHUB_API = "https://api.github.com/users/gouravdhiman2000";
const user = fetch(GITHUB_API);
console.log(user);
user.then(function(data){
    console.log(data);
});


const cart = ["shoes", "laptop", "mobile phone", "watch"];

crateOrder(cart, function(){
    proceedToPayment(orderID, function(){
        showOrderSummary(paymentInfo, function(){
            updateWalletBalance(orderDetails, function(){

            })
        })
    })
})

createOrder(cart)
    .then(function (orderID){
        return proceedToPayment(orderID); //new  a new Promise to next promise
    })
    .then(function (paymentInfo){
        return showOrderSummary(paymentInfo)
    })
    .then(function (orderDetails){
        return updateWalletBalance(orderDetails)
    })
