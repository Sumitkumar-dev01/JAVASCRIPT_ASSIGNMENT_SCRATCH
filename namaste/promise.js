/**
 * a promise is an object representing the eventual
 *  ocmpletion of failure of an asynchronous
 *  operation. 
 */



const cart = ["shoes","kurta","pyjama"]; 

createOrder(cart,function(orderId){
    proceedToPayment(orderId); 
})


const promise = createOrder(cart); 
promise.then(function(orderId){
    proceedToPayment(orderId); 
})


createOrder(cart)
    .then(function(orderId){
        return proceedToPayment(orderId); 
    })
    .then(function(paymentInfo){
        return showOrderSummary(paymentInfo); 
    })
    .then(function(paymentInfo){
        return updateWalletBalance(paymentInfo); 
    })



// promise chaining help us in get out of callback hell. 