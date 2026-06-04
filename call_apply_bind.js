let person1 = {
    firstName: "pw",
    lastName: "skills",
    printFullName: function(){
        console.log(this.firstName + " " + this.lastName); 
    }
}; 

let person2 = {
    firstName: "sumit",
    lastName: "kumar"
}


person1.printFullName(); // pw skills 
person1.printFullName.call(person2) // sumit kumar 



// cleaner code 

function fullName(){
    console.log(this.firstName + " " + this.lastName)
}

let person3 = {
    firstName: "Sumit",
    lastName: "Kumar"
}

let person4 = {
    firstName: "rahul",
    lastName: "kumar"
}

fullName.call(person3); 
fullName.call(person4); 



// passing argument in call function 

function printFullName2(personName){
    console.log("welcome" + personName + "to" + this.firstName + " " + this.lastName)
}

let person5 = {
    firstName : "SUMIT",
    lastName : "KUMAR",
}

let person6 = {
    firstName :  "RAHUL",
    lastName : 'Kumar'
}

printFullName2.call(person1,"sumit2299"); 
printFullName2.call(person2,"rahu"); 