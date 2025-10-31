const orderList = [
    {name:"laptop",price:12000},
    {name:"mouse",price:500},
    {name:"keyboard",price:2000},
    {name:"laptop_bagpack",price:500}
]

// now your task is to calculate the sum of price of all "name" in the given array. 

let sum = 0;
orderList.forEach((data)=> sum = sum+data.price)
console.log(`the price of orderlist is ${sum}`);

const arr = [1,2,3,4,5];
arr.forEach((num)=> console.log(num));

const numbers = [10,20,30,40]
let summation = 0; 
numbers.forEach((data)=> summation = summation+data)
console.log("sum is equal to:",summation);


const fruits = ["apple","banana","mango"];
fruits.forEach((data)=> console.log(data.toUpperCase()))



const names = ["sumit","aman","riya"]
names.forEach((name,index)=>{
    console.log(`${index}->${NamedNodeMap}`)
})



const nums = [5,10,15,20,25];
nums.forEach((num)=>{
    if(num>15){
        console.log(num);
    }
})


const users = [
    {name:"sumit",age:21},
    {name:"aman",age:25},
    {name:"riya",age:20}
]

users.forEach((data)=>console.log(data.name))



const matrix = [
  [1,2],
  [3,4],
  [5,6]
]


matrix.forEach((data)=>console.log(data));

const number = [1,2,3];
doubleNums = [];
numbers.forEach((nums)=>{
    doubleNums.push(nums*2)
})
console.log(doubleNums)



const result = arr.forEach(num => num*2);
console.log(result)


const arr1 = [1,2,3,4];
for(const num of arr){
    if(num == 3){
        break;
    }
    console.log(num);
}