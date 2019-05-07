
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
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor () {
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += `Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homelocation){
        super(name, age);
        this.homelocation = homelocation;
    }
    getGreetings(){
        let greeting = super.getGreetings();
        if(this.homelocation ){
            greeting += `I am from ${this.homelocation}`;
        }
        return greeting;
    }
}
const me = new Traveler('Priyanshu', 23, 'New Delhi');
//console.log(me.hasMajor());
console.log(me.getDescription());
console.log(me.getGreetings());

const other = new Student();
console.log(other.getGreetings());
console.log(other.getDescription());
