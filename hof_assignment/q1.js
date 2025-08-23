// const orderlist = [
//     {name: "laptop",price: 120000},
//     {name: "mobile",price: 7000},
//     {name: "mobile charger",price:1500},
//     {name: "laptop charger",price: 10500}
// ];

// //  my attempt 

// // function totalPrice(orderlist){
// //     orderlist.forEach(price => {
// //         console.log(price);
// //     });

// //     let price1 = 0;
// //     let total_price = price+price1;
// //     console.log(total_price);


// // }

// // totalPrice();



// let sum = 0;
// orderlist.forEach((data) => (sum+= data.price));
// console.log(`the total price is ${sum}`);


// // fetch("")
// // .then(res.json())
// // .then(data() = console.log(data));




// // just writing an illustration of for each loop 

// const orderList = [
//     {name: "laptop", price: 10000},
//     {name: "mobile", price: 20000},
//     {name: "adaptor",price : 1223}
// ]

// let sum2 = 0;
// orderList.forEach((data)=>(sum1+=data.price));
// console.log(`the total price is equal to ${sum1}`);



// // let's understand function and arrow function 

// function hello(){
//     console.log("hey good morning");
//     return hello;

// }

// hello();

// let hello1 = () => {
//     console.log("hey good morning once again with arrow function ");
//     return hello1;
// }
// hello1();







// let sum1= 0;
// orderlist.forEach((data) => (sum+= data.price));
// console.log(`the total price is ${sum}`);












// QUESTION 1 


const ordersList = [
    {
        name:"laptop",price:12000,
    
    },
    {
        name:"mobile",price:70000
    },
    {
        name:"mobile charger",price:1500
    },
    {
        name:"laptop charger",price:10500
    }
]

// to find total price from order lis t
let sum = 0;
ordersList.forEach((data)=>(sum+=data.price));
console.log(sum)





const numbers = [10,20,30,40,50];
numbers.forEach(function(num){
    console.log(num)
})



const number1 = [5,1,52,30,4,0];
let sum1 = 0; 
// number1.forEach(num =>{
//     sum1 += num;
// })
number1.forEach((num)=>(sum1 += num))
console.log(sum1)



// converting all string to uppercase 

const fruits =  ["apple", "banana", "mango"];
// fruits.forEach(fruit =>{
//     console.log(fruit.toUpperCase());
// })
fruits.forEach((fruits)=>console.log(fruits))


const names = ["Alice", "Bob", "Alice", "Eve", "Bob", "Alice"];
const count = {};
// names.forEach(name =>{
//     count.name = (count.name || 0) +1; 
// })
names.forEach((name) => (count.name = count.name || 0+1) )
console.log(count)





// flatten a two d array 


// const arr = [[1, 2], [3, 4], [5, 6]];
// let flat = [];
// arr.forEach(subArr=>{
//     subArr.forEach(num =>{
//         flat.push(num);
//     })
// })

// console.log(num);




const nums = [10, 15, 20, 25, 30];
let evnes = [];

nums.forEach((num) =>{
    if(num%2 == 0){
        evnes.push(num);
    }
})

console.log(evnes);