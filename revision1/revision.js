/*
types of variables = (let, const, var)
data types = 5 (string, number, boolean, undefined, object )
*/

const { sortBy } = require("lodash");

let samp = 'sunil'
console.log(typeof samp);

const samp1 = [1,2,3,4];
console.log(typeof samp1);

const samp2 = {name:'sunil', age:'28'};
console.log(typeof samp2);

const samp3 = true ;
console.log(typeof samp3);

let samp4 = 34;
let x = samp/samp4;

console.log(x);

let y = '34';
console.log(typeof y);

// if syntax =  if (condition) { } else { }
if (samp4 === y) {
    console.log('it is true');
} else { 
    console.log('it is false')
}

// if syntax = if (condition1) { } else if (condition2) { } else { }

const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);

/* switch syntax 
    switch(expression) {
        case x:
        // code block
        break;
        case y:
        // code block
        break;
        default:
        // code block
     } 
 */

let day;
switch (new Date().getDay()) {
    case 0:
      day = "today is weekend";
      break;
    case 6:
      day = "today is weekend";
      break;
    default:
      day = 'today is a weekday';
  }
  console.log(day);

/*  type of loops :

    for - loops through a block of code a number of times
    for/in - loops through the properties of an object
    for/of - loops through the values of an iterable object
    while - loops through a block of code while a specified condition is true
    do/while - also loops through a block of code while a specified condition is true

    For loop syntax (best suit for array of numbers)
    for (statement 1; statement 2; statement 3) {
        code block to be executed
    }
*/

{
let x;
for (x=0; x<=5; x++) {
    console.log('the number is:', x);
}
}

// write a programe to print all even numbers belowe 20 

{
    let z = [];
    for (let x=0; x<20; x=x+2) {
     z.push(x);
    }
    console.log(z);
}

// write a programe to print all multiples of 3 below 100 and sum of its respective intergers 

{
    let multi3 = [];
    for (let i=0; i<100; i++){
        if( i%3 === 0) {
            multi3.unshift(i);
        }
    }
    console.log(multi3);

    // sort an array in increasing order 

    multi3.sort(function (a,b){
        return a-b;
    });
    console.log(multi3);

    let sum = 0;
    for (i=0; i<multi3.length; i++){
        sum = sum + multi3[i];
    }
    console.log('the sum of multiples of 3 < 100 is:', sum);
}

/*  'For in' loop syntax (will use 'in' for objects)
    for (key in object) {
  // code block to be executed
    }
*/    
{
    const samplObj = {name:'sunil', age:'28', height:172};
    let y = '';
    for (let x in samplObj) {
        y += samplObj[x] + ' ';
    }
console.log(y);
}

/* 'For of' loop syntax (will use 'of' for arry of srings)
    for (variable of iterable) {
        // code block to be executed
    }
*/
{
const cars = ["BMW", "Volvo", "Mini"];
let text = " ";
for (let x of cars) {
  text += x + ' ';
};
console.log(text);
}

/* While loop - while loop loops through a block of code until the specified condition is true
    While loop syntax 
    while (condition) {
    // code block to be executed
    // i++
    }
*/
{
let text = " ";
let i = 0;
while (i < 10) {
  text = "The number is " + i;
  i++; // i++ is mandatory if we miss the increment, the loop will never end and the system may crash
  console.log(text);
};
}

/* Do While loop syntax - the loop will be executed once before and then checks for the condition 
    do {
    // code block to be executed
    // i++
    } while (condition);
*/

{
    let text = ' ';
    let i = 0;
    do {
    text = 'the num is:' + i;
    i++;
    console.log(text);
    } while (i<5);
}

/* functions - it is block of code designed to perform perticular task
    syntax
    function name(parameter1,parameter2){
        // code to be executed
    }
*/
{
function sum(a,b) {
    y = a * b;
    return y;
}
const res = sum (12,23);
const res2 = sum(1223, 435);

console.log(res);
console.log(res2);
}

{
    function exg (a,b) {
        return a/b;
    }

    const res = exg(200, 5);
    console.log(res);
}

/* call back or arrow function - it allow us to write shorter function syntax

*/

function fun1 ( a, b, res) {
    res (a*b);
}
fun1(76, 67, res => {
    if (res%2 === 0) {
        console.log('it is a prime number');
    } else {
        console.log('it is not a prime munber');
    }
});

function fun2 ( a, b, res2) {
    res2 (a+b);
}
fun2 (23, 45, res2=> {
    if (res2%3 === 0){
        console.log('the result ' +res2+ ' is a multiple if 3')
    } else {
        console.log(`the result ${res2} is not a multiple of 3`)
    }
});

/* class - these are templates for JavaScript Objects
    syntax 
    class ClassName{
        constructor () {....}
    }
*/
{
class Car {
    constructor ( name, year){
        this.name = name;
        this.year = year;
    }
}

let obj1 = new Car('Baleno', 2022);
let obj2 = new Car('Jaguar', 2023);
console.log(obj1);
console.log(obj2);
}

class Details {
    constructor ( firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    fullname () {
        return `${this.firstname} ${this.lastname}`;
    }
}

let student1 = new Details('mounish','krishna');

console.log(student1.fullname());
console.log(student1);