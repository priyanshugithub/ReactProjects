
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
class Student extends Person {

}
const me = new Student('Priyanshu', 23);
console.log(me.getGreetings());
console.log(me.getDescription());

const other = new Student();
console.log(other.getGreetings());
console.log(other.getDescription());
