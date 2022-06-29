// Deep copy VS Shallow Copy

// Deep copy - call by value.
let a = 'hello';
const b = a;

a = 'hi';
console.log(a);
console.log(b);

//===================

// shallow copy -- call by reference
let arr = [1,2];
const arr2 = [...arr]; // with spread operator it becomes deep copy even in objects.

arr.pop();
console.log(arr);
console.log(arr2);


let obj = {
    name:'Ram',
    age : 23
}

const obj2 = {...obj};
obj.name = 'Shyam';

console.log(obj);
console.log(obj2);