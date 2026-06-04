function printFullName(){
    console.log(this.firstName + " " + this.lastName); 
}

let person1 = {
    firstName : "sumit",
    lastName : "kumar"
}; 

let person2 = {
    firstName: "rahul",
    lastName : "kumar"
}

const firstPersonFullName = printFullName.bind(person1); 
const secondPersonFullName = printFullName.bind(person2); 

console.log(firstPersonFullName); 
console.log(secondPersonFullName); 

firstPersonFullName(); 
secondPersonFullName(); 