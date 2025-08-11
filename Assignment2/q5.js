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





const set1 = new Set([6,7,8,9,10]);
console.log(set1);
let number_squareMap1 = new Map();
set1.forEach(number =>{
    number_squareMap1.set(number,number*number);
});
console.log(set);
console.log(Array.from(set1).join(","));

console.log(number_squareMap1);
