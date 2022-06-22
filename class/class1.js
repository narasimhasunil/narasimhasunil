// const obj = {
//     name:'Ram',
//     age:23,
//     fullName : function () {
//         return this.age+this.name
//     }
// }

// console.log(obj.fullName());

// ES5 syntax
class Sample {
    constructor(name, age){ // used for initializing the variables
        this.name = name;
        this.age = age;
    }

    fullName () {
        return `${this.name} ${this.age}`
    }

    static staticMethod() {
        return 'static method has been called.';
    }
}

const obj = new Sample('ram', 29);
const obj2 = new Sample('shyam', 229);
console.log(obj.fullName());
console.log(obj2.fullName());

//console.log(Sample.staticMethod());