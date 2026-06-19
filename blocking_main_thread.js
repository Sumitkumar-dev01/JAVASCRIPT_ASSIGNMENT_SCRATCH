console.log("starting of the program"); 
setTimeout(() => {
    console.log("callback function execution"); 
}, 5000);
console.log("end"); 

// as usual output should be:  start   end   callback function execution 

// but what if we add millions of lines of code after console.log("end") that will take 10 second
// for execution 
// so what will be output?


//adding code 

let startDate = new Date().getTime(); 
let endDate = startDate; 
while(endDate<startDate+100){
    endDate = new Date().getTime(); 
}

console.log("expires");