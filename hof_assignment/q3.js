let expenses = [
    {
      amount:100,category:"utilities"  
    },
    {
        amount:200,category:"groceries"
    },
    {
        amount:50,category:"entertainment"
    }
]


let expensesWithTax = expenses.map((expense)=>{
    let tax = expenses.amount *0.1;
    return{...expenses,tax:tax}
})

console.log("expenses with tax", expensesWithTax);




// map original array ko change nahi karta hain but new array return karta hain 

const nums = [1,2,3];
const double = nums.map((data)=>data*2);
console.log(double);
console.log(nums)

/**
 * 🟡 1. Basic Number Transformation

Question:
Ek array const nums = [1, 2, 3, 4, 5] hai.
Har number ka double naya array mein store karo.
 */


const number = [1,2,3,4,5];
const new_array = [];
const double_number = number.map((data)=>(new_array.push(data*2))) 
console.log(new_array);
console.log(number);


