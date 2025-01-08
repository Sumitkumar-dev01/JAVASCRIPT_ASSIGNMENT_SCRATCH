// creating map 

// const map = new Map();
// map.set({
//     Name: "Sumit kumar",
//     age: 21,
//     email: "sumitkum803202@gmail.com",
//     location: "patna"
// });

// console.log(map);

// // function retrieve(name){
// //    return map.get(email);
// // }
// // let x = retrieve("sumit");
// // console.log(x);





// creating map 

const  map = new Map();
map.set("sumit",{
    name: "sumit kumar",
    age: 21,
    email: "sumitkum803202@gmail.com",
    location: "xyz"
});

function retrieve(name){
    return map.get(name);

}
console.log(retrieve("sumit"));



