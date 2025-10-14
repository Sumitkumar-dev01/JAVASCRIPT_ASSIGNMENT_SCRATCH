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


/**
 * 
 * 🟡 5. Conditional Check in forEach

👉 Kuch elements par condition lagana.

Question:
Ek array const nums = [5, 10, 15, 20, 25] diya gaya hai.
forEach ka use karke sirf un numbers ko print karo jo 15 se bade hain.

✅ Expected Output:

20  
25

🟡 6. Object ke Array par forEach

👉 forEach sirf numbers ya strings par nahi, objects par bhi lagta hai.

Question:
Ek array hai:

const users = [
  {name: 'Sumit', age: 21},
  {name: 'Aman', age: 25},
  {name: 'Riya', age: 20}
];


forEach ka use karke sab users ke name ko print karo.

✅ Expected Output:

Sumit  
Aman  
Riya

🟡 7. Nested forEach Loop

👉 Ek array ke andar dusra array ho to nested forEach kaise use karein.

Question:

const matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
];


forEach ka use karke sab numbers ko print karo.

✅ Expected Output:

1  
2  
3  
4  
5  
6

🟡 8. Copying Array with forEach

👉 Ek naye array mein values push karna using forEach.

Question:
Ek array const nums = [1, 2, 3] diya hai.
forEach ka use karke doubledNums naam ka naya array banao jisme har value ka double ho.

✅ Expected Output:

[2, 4, 6]

🟡 9. forEach vs map Confusion Check

👉 forEach value return nahi karta.

Question:
Agar aap forEach ka result kisi variable mein store karo:

const result = arr.forEach(num => num * 2);
console.log(result);


to output kya hoga?

✅ Expected Output:

undefined

🟡 10. Break ya return in forEach

👉 forEach mein break nahi chalta — tricky question.

Question:
Agar aap forEach mein return ya break lagate ho to kya hoga?
Ek array const arr = [1, 2, 3, 4] mein agar element 3 aate hi loop ko break karna ho to kya karein?

✅ Answer:
forEach mein aap break nahi kar sakte. Iske liye for...of ya some ya every use karte hain.
 */