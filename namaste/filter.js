const arr = [5,1,2,3,6]; 

// filter odd values 

function isOdd(x){
   return x%2; 
}

const output = arr.filter(isOdd); 
console.log(output); 

// find even values 

function isEven(x){
    return x%2 == 0;
}

const output2 = arr.filter(isEven); 
console.log(output2);

const output3 = arr.filter((x)=>{
    return x%2 == 0 
})

console.log(output3)