function printFullName(){
    console.log(this.firstName + " " + this.lastName); 
}

let person1 = {
    firstName: "rahul",
    lastName: "kumar"
}

let person2 = {
    firstName: "sumit",
    lastName: "kumar"
}

printFullName.apply(person1); 
printFullName.apply(person2); 


// example2 

 // syntax = apply(thisarg, [thisarg])

let numbers = [2,4,6,8,45]; 
let maxNumber = Math.max.apply(null,numbers); 
console.log(maxNumber); 



// bind method 

// syntax = functionName.bind(thisArg,arg1,arg2, .....); 

