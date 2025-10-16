const orderList = [
    {name:"laptop",price:12000},
    {name:"laptop",price:12000},
    {name:"laptop",price:1200},
    {name:"laptop",price:1200},
]

// sum of price 

let sum = 0; 
orderList.forEach((data)=>sum = sum+data.price)
console.log(`the price of orderlist is ${sum}`)




// question 2 
/*Ek array const arr = [1, 2, 3, 4, 5] diya gaya hai.
forEach ka use karke har number ko console mein print karo.*/

const arr  = [1,2,3,4,5]
arr.forEach((num)=>console.log(num));


/*
Ek array const numbers = [10, 20, 30, 40] hai.
forEach loop ka use karke inka total sum nikaalo.
 */

const numbers = [10,20,30,40]
let summation = 0;
numbers.forEach((data)=>summation = summation+data)
console.log("sum is equal to: ",summation);


/**
 * 
 Ek array const fruits = ['apple', 'banana', 'mango'] diya gaya hai.
forEach ka use karke sab fruits ko uppercase mein convert karke print karo.
 */


const fruits = ["apple","banana","mango"];
fruits.forEach((data)=>console.log(data.toUpperCase()))


/**
 * Ek array const names = ['Sumit', 'Aman', 'Riya'] diya gaya hai.
forEach ka use karke har name ke aage uska index print karo, jaise:
 */

// my approach 
const names = ["sumit","aman","riya"]
names.forEach((names)=>{for(let i =0; i<names.length;i++){
    console.log(`${i}->${names}`);
}
})


// corrected code 
names.forEach((name,index)=>{
    console.log(`${index}->${name}`)
})









/*Question:
Ek array const nums = [5, 10, 15, 20, 25] diya gaya hai.
forEach ka use karke sirf un numbers ko print karo jo 15 se bade hain.
*/

const nums = [5,10,15,20,25];
nums.forEach((num)=>{
  if(num>15){
    console.log(num);
  }
})




/**
 * Ek array hai:

const users = [
  {name: 'Sumit', age: 21},
  {name: 'Aman', age: 25},
  {name: 'Riya', age: 20}
];


forEach ka use karke sab users ke name ko print karo.
 */


const users = [
  {name:"sumit",age:21},
  {name:"Aman",age:25},
  {name:"riya",age:20}
]

users.forEach((data)=>console.log(data.name));


/**
 * 
🟡 7. Nested forEach Loop
👉 Ek array ke andar dusra array ho to nested forEach kaise use karein.

Question:

js
Copy code
const matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
];
forEach ka use karke sab numbers ko print karo.


 */

const matrix = [
  [1,2],
  [3,4],
  [5,6]
]

matrix.forEach((data)=>console.log(data));


/**
 * 🟡 8. Copying Array with forEach

👉 Ek naye array mein values push karna using forEach.

Question:
Ek array const nums = [1, 2, 3] diya hai.
forEach ka use karke doubledNums naam ka naya array banao jisme har value ka double ho.

✅ Expected Output:

[2, 4, 6]
 */



const number = [1,2,3];
doubleNUMS = [];
number.forEach((nums)=>{
  doubleNUMS.push(nums*2)
});
console.log(doubleNUMS);



/**
 * for each ka result kisi variable mein store karne par woh undefined output deta hain 
 * 
 */

const result = arr.forEach(num => num*2);
console.log(result)



// break is not allowed in foreach so we have to use for of loop 

const arr1 = [1,2,3,4];
for(const num of arr){
  if(num ==3){
    break;
  }
  console.log(num);
} 

