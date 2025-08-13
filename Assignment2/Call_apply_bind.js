// call -> need 

// person1 -> person2 when person 2 need person 1 or vice_versa 


// let person1 = {

//     firstName:"raushan",
//     lastName:"kumar",
//     handle_Gf : function handle_gf(){
//         console.log("i can handle this situation very well");
//     },
//     list:[{
//         details:{
//             name:"xyz",
//             mobile_number:1234567890,
//         }
//     }]
// }

// let person2 = {
//     firstName:"ramu",
//     lastName:"kumar",

// }


//  // now i want to get the features of handle_gf and list from person 1 
//     // then i need to use call method 
//     // here's how we can use it 


// x =  person1.handle_Gf.call(person2);
// console.log(x);

// y = person1.list.call(person2);
// console.log(y);
 






function printFullName(personName){
    console.log("welcome" + personName + "to" + this.firstName + " "+ this.lastName);
}

let person1 = {
    firstName:"pw",
    lastName: "skills",
}

let person2 = {
    firstName:"physics",
    lastName:"wallah",
}

printFullName.call(person1,"vishwa Mohan");
printFullName.call(person2,"pratik maheswari");