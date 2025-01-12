const orderlist = [
    {name: "laptop",price: 120000},
    {name: "mobile",price: 7000},
    {name: "mobile charger",price:1500},
    {name: "laptop charger",price: 10500}
];

//  my attempt 

// function totalPrice(orderlist){
//     orderlist.forEach(price => {
//         console.log(price);
//     });

//     let price1 = 0;
//     let total_price = price+price1;
//     console.log(total_price);


// }

// totalPrice();



let sum = 0;
orderlist.forEach((data) => (sum+= data.price));
console.log(`the total price is ${sum}`);


// fetch("")
// .then(res.json())
// .then(data() = console.log(data));




// just writing an illustration of for each loop 

const orderList = [
    {name: "laptop", price: 10000},
    {name: "mobile", price: 20000},
    {name: "adaptor",price : 1223}
]

let sum2 = 0;
orderList.forEach((data)=>(sum1+=data.price));
console.log(`the total price is equal to ${sum1}`);



// let's understand function and arrow function 

function hello(){
    console.log("hey good morning");
    return hello;

}

hello();

let hello1 = () => {
    console.log("hey good morning once again with arrow function ");
    return hello1;
}
hello1();







let sum1= 0;
orderlist.forEach((data) => (sum+= data.price));
console.log(`the total price is ${sum}`);

