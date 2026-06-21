// creating a promise 

const cart = ["shoes","pants","pyjamas"]; 

const promise = createOrder(cart); // orderId

promise.then(function(){
    proccedToPayment(orderId); 
})


// producer 

function createOrder(cart){
    const pr = new promise(function(resolve,reject){
        // create order 
        // validateCart 
        // orderId 
        if(!validationCart(cart)){
            const err = new Error('cart is not valid')
            reject()
        }
    })

    return pr; 
}