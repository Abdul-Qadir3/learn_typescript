"use strict";
// //overloads give us type-checked calls
// //this is not part of the overload list,
// //so it has only three overloads
function add(arg1, arg2) {
    return arg1 + arg2;
}
// //Calling 'add' with any other parameter types would cause an error except for the three options
// // console.log(add(1, 2));
console.log(add("Hello", "World"));
console.log(add(true, false));
// // ============================================
// //number array
let arry = [832, 1535, 1315, 155];
//Tuple types have the advantage that you can accurately describe the type of an array of mixed types
var tuple = [531, "151", true];
var secondElement = tuple[1]; // secondElement now has type 'string'
// // =================================================
// // structural typing
class Human {
    constructor(userName) {
        this.name = userName;
    }
}
let humanObj = new Human("Usman"); //obj
humanObj.name;
// let obj ={
//     name:""
// }
class Human1 {
    constructor(name) {
        this.name = name;
        // this.age = age;
    }
    eat() {
        console.log(this.name + " is a Human and is eating");
    }
}
class Animal1 {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is a Animal and is eating");
    }
}
class WildAnimal1 {
    constructor(title) {
        this.title = title;
    }
    eat() {
        console.log(this.title + " is a Wild Animal and is eating");
    }
}
class Robot1 {
    constructor(name) {
        this.name = name;
    }
}
// let h: Human1 = new Human("Tom");
// let a: Animal1 = new Animal1("Goat");
let r = new Robot1("R2-D2");
// let h2 = h;
// h2 = a;
// h2.eat();
// let r2 = r;
// r = a;
// //  a = r;
// //Animal has a name, Robot also has a name
// // "a" is a stale object therefore extra eat() method in "a" is ok
// //a = r2;//Error, Robot does not have eat method
// let hum: Human = new Animal("Dog"); //Fresh Object
// // But Fresh or stale both have same properties and methods
// // therefore compatible
// // let wild : Animal = new WildAnimal("Deer");//Fresh Object
// let r0: Robot = new Animal("Donkey");
// var isItRobot = r0 instanceof Robot;
// console.log("R0 instance of ", isItRobot);
// ==========================================
class Animal {
    constructor(theName) {
        this.name = theName;
    }
    move(meters = 0) {
        console.log(this.name + " moved " + meters + "m.");
    }
}
class Snake extends Animal {
    constructor(name) {
        super(name);
    }
    move(meters = 5) {
        console.log("Slithering...");
        super.move(meters);
    }
    bite() {
        console.log("bites");
    }
}
class Horse extends Animal {
    constructor(name) {
        super(name);
    }
    move(meters = 45) {
        alert("Galloping...");
        super.move(meters);
    }
}
class Donkey extends Animal {
    constructor(name, distance) {
        super(name);
        this.distance = distance;
    }
    move(meters = 45) {
        alert("Moving...");
        super.move(meters);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    move(meters = 1) {
        alert("Jumping...");
        super.move(meters);
    }
}
let a = new Snake("Python");
a.move(5);
//Snake move method is called not Animals, this is because of polymorphism
let a1 = new Horse("Rocket");
let h = a1; //explicit casting not require because Child object have same properties and fuctions
// let h2: Horse = a1 as Horse; //explicit will also works but not needed
let a2 = new Donkey("Worker", 100);
let h3 = a2; //explicit casting require because Child object have additional properties or functions
// let h4: Donkey = a2; // Error -- will not work, explicit casting is required as above
let d1 = new Donkey("Worker", 200);
console.log("is Animal? " + (d1 instanceof Animal)); // true
console.log("is Donkey? " + (d1 instanceof Donkey)); // true
console.log("is Horse? " + (d1 instanceof Horse));
let h1 = new Cat("Kitten");
//why is this allowed? Because it has same properties and methods (structural type) not because of inheritance
//https://github.com/Microsoft/TypeScript/issues/5303
class A {
    constructor() {
        this.MyvirtualMethod();
    }
    MyvirtualMethod() {
        console.log("A");
    }
}
class B extends A {
    constructor() {
        super(...arguments);
        this.testString = "B";
    }
    MyvirtualMethod2() {
        console.log(this.testString); // This becomes undefined
    }
}
let obj = new B();
// obj.testString
// public
// private
// protected
var passcode = "secret passcode";
class Employee {
    get fullName() {
        //you have to login
        return this._fullName;
    }
    set fullName(newName) {
        this._fullName = newName;
    }
}
var employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
