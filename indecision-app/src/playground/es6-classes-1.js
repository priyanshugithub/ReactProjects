
class Person {
    constructor(name='Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreetings(){
        return `Hi, I am ${this.name}!`;
    }
    getDescription(){
        return `Hi, I am ${this.name} and my age is ${this.age} !`;
    }
} 

const me = new Person('Priyanshu', 23);
console.log(me.getGreetings());
console.log(me.getDescription());

const other = new Person();
console.log(other.getGreetings());
console.log(other.getDescription());
