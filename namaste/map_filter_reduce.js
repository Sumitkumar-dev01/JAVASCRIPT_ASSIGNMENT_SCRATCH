const arr = [5,1,2,3,4]; 

//double = [10,2,4,6,8]
// triple = [15,3,6,9,16]
// 

function double(x){
    return x*2; 
}

function triple(x){
    return x*3; 
}


const output = arr.map(double); 
console.log(output); 

const output1 = arr.map(triple); 
console.log(output1); 


// another way of doing this: 

const output2 = arr.map(function binary(x){
    return x.toString(2); 
})

const output3 = arr.map((x)=>{
    return x.toString(2); 
})







