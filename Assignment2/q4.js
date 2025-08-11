const person1 = {
    name: "sumit",
    age: 21

};

const person2 = {
    name: "rahul",
    age: 21
};

function introduce(){
    console.log(`Hello i'm ${this.name} and i'm ${this.age} years old`);

}
introduce(person1);
introduce.call(person2);








const person3 = {
    name:"sumit",
    age:22
}

const person4 = {
    name:"ramu",
    age:22
}

function introduce1(){
    console.log(`hello i am ${this.name} and i'm ${this.age} years old`);
}
introduce1()

introduce.call(person3);
introduce.call(person4);