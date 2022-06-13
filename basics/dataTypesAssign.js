//assignment 

const a = 24
const b = 'sunil';
const c = true;
const d = null;
const e = undefined;

//1.combination of number and string

    let f = a + b;
    console.log (typeof f); //ans = string

//2. combination of number and boolean

    let g = a + c;
    console.log (typeof g); //ans = number

//3. combination of number and null

    let h = a + d;
    console.log(typeof h); //ans = number

//4. combination of number and undefined

    let i = a + e;
    console.log(typeof i); //ans = number

//5. combination of string and boolean

let j = b + c;
console.log(typeof j); //ans = string

//6. combination of string and null

let k = b + d;
console.log(typeof k); //ans = string

//7. combination of string and undefined

let l = b + e;
console.log(typeof l); //ans = string

//8. combination of boolean and null

let m = c + d;
console.log(typeof m); //ans = number

//9. combination of boolean and undefined

let n = c + e;
console.log(typeof n); //ans = number

//10. combination of null and undefined

let o = d + e;
console.log(typeof o); //ans = number