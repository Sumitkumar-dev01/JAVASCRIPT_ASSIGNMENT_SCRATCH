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