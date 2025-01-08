const set = new Set([1,2,3,4,5]);
console.log(set);

let numberSquareMap = new Map();
set.forEach(number =>{
    numberSquareMap.set(number,number*number);
});

console.log("set:");
console.log(Array.from(set).join(","));
console.log("\n numberSquareMap: ");
numberSquareMap.forEach((square,number)=>{
    console.log(`${number}: ${square}`);
});