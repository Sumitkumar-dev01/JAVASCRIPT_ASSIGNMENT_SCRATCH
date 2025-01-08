function displayInfo(name,role){
    console.log("hey i am logging a message");
};
// displayInfo("sumit","developer");

displayInfo.call("sumit","developer");
displayInfo.apply(["sumit","developer"]);


function greet(){
    console.log("greeting from my side");
}

const user = {name:"sumit"};
const boundGreet = greet.bind(user);
boundGreet();