
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
const me = new Student('Priyanshu', 23, 'Computer Science');
console.log(me.hasMajor());
console.log(me.getDescription());

const other = new Student();
console.log(other.getGreetings());
console.log(other.getDescription());
