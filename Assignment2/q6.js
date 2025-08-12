// function displayInfo(name,role){
//     console.log("hey i am logging a message");
// };
// // displayInfo("sumit","developer");

// displayInfo.call("sumit","developer");
// displayInfo.apply(["sumit","developer"]);


// function greet(){
//     console.log("greeting from my side");
// }

// const user = {name:"sumit"};
// const boundGreet = greet.bind(user);




function displayInfo(name,role){
    console.log("this is a function");
}
displayInfo("sumit","developer");
displayInfo.call("sumit","developer");

displayInfo.apply(["sumit","developer"]);



function greet(){
    console.log("greeting from my side");
}






// more on call apply and bind 


let person1 = {
    firstName: "sumit",
    lastName:"kumar",
    printFullName:function(){
        console.log(this.firstName +" " +  this.lastName)
    }
}

let person2 = {
    firstName : "rahul",
    lastName:"kumar",
}

person1.printFullName();
person1.printFullName.call(person2);





function printFullName1(){
    console.log(this.firstName+" "+ this.lastName);
}

let person3 = {
    firstName: "sumit",
    lastName: "kumar",
}


let person4 = {
    firstName: "rahul",
    lastName: "kumar",
}

printFullName1.call(person3);
printFullName1.call(person4);



// passing arguments to the function 


function printFullName3(personName){
    console.log("welcome " + personName + "to" + this.firstName+" "+ this.lastName);
}

let person5 ={
    firstName:"sumit",
    lastName:"kumar",
}

let person6 = {
    firstName:"rahul",
    lastName:"kumar",
}

printFullName3.call(person5,"sumit");
printFullName3.call(person6,"rahul");