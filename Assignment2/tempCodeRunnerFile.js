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


function calculate(oeration,a,b){
    if(operation == "add"){
        return this.add(a,b);
    }
    else if(operation == "sub"){
        return this.sub(a,b)
    }

    else if(operation == "multiplication"){
        return this.multiplication(a,b)
    }
}


const addition = calculator.calculate.call(calculator,"add",5,3);
console.log("addition is",addition);


const multiplication = calculator.calculate.apply(["multiplication",5,3]);
console.log(multiplication);