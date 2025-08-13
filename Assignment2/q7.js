// tasks 

// // create the calculator object 

// const calculator = {
//     add: function(a,b){
//         return a+b;
//     },

//     subtract:function(a,b){
//         return a-b;
//     },

//     multiply: function(a,b){
//         return a*b;
//     },

//     calculate: function(operation,a,b){
//         if(operation == "add"){
//             return this.add(a,b);
//         }else if(operation === "subtract"){
//             return this.subtract(a,b);
//         }
//         else if(operation === "multiply"){
//             return this.multiply(a,b);
//         }
//     }

// }


// // use call to perform an addition operation 

// const additionResult = calculator.calculate.call('add',5,3);
// console.log(`addition result: ${additionResult}`);







let calculator = {
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a+b;
    },
    multiplication:function(a,b){
        return a+b;
    },

}


function calculate(operation,a,b){
    if(operation == "add"){
        return this.add(a,b);
    }
    if(operation == "sub"){
        return this.sub(a,b)
    }

     if(operation == "multiplication"){
        return this.multiplication(a,b)
    }
}


const addition = calculator.calculate.call(calculator,"add",5,3)
console.log("addition is",addition);


const multiplication = calculator.calculate.apply(calculator["multiplication",5,3]);
console.log(multiplication);






const discountCalculator = {
    discountPercentage: 10,
    applyDiscount:function(amount){
        return amount -(amount*this.discountPercentage)/100;
    }
}


const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);
const discountedAmount = calculateDiscount(100);
console.log(`Discounted Amount: ${discountedAmount}`);





