// function random(){
//     setInterval(() => {
//         console.log(Math.random()*100)
//     }, 2000);
// }
// random()


// function random2(){
//     setInterval(() => {
//         console.log("hello world once again");
//     }, 2000);
// }

// function random3(){
//     setInterval(() => {
//         console.log(Math.random())
//     }, 3000);
// }




/*Q: Ek function likho jo "Hello" ko 3 seconds baad print kare using setTimeout */


function delay(){
    setTimeout(() => {
        console.log("hello after three second");
    }, 3000);
}
delay()



/**
 * Q: Kaise aap setTimeout ke andar function ko arguments pass karoge?
Ek example code likho jisme ek function ko "Sumit" naam pass ho 2 seconds baad.
 */


// my approach 


// function delay2(){
//     setTimeout(() => {
//         function name(sumit){
//             console.log("hello from sumit");
//             console.log(name());
            
//         }
//     }, 2000);
    
// }
// delay2()



function delay2(){
    setTimeout(() => {
        console.log("hello from sumit");
    }, 2000,"sumit");
}
delay2()



/**
 * Q: for loop ke andar setTimeout use karo to har iteration ke baad multiple logs aayenge.
Explain karo ye code kya output dega:

for(var i = 1; i <= 3; i++){
  setTimeout(() => console.log(i), 1000);
}


Aur ise sahi kaise karoge using let OR closure?
 */




// for(var i =1; i<=3; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, (1000));
// }


// using let 

for(let i=1; i<=3; i++){
    setTimeout(() => {
        console.log(i)
    }, 1000);
}




// read scopes in depth to understand the above questions 




