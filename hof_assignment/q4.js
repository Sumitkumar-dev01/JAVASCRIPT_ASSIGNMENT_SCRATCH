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



let groceriesExpenses = expenses.filter((expenses) => expenses.category === "grocceries");
console.log("grocceries expenses",groceriesExpenses);