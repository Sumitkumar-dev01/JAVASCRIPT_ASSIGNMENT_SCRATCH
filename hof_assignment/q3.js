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