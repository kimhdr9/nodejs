class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    greeting(){
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}



// export pour une utilisation avec un autre module.
module.exports = Person;