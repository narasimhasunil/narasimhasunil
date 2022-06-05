
let msec = Date.parse("March 21, 2012");
const d = new Date(msec);

console.log(d);

{ // example 1
    let f = new Intl.DateTimeFormat('en');
    let a = f.formatToParts();
    console.log(a);
 }
 { // example 2
    let f = new Intl.DateTimeFormat('hi');
    let a = f.formatToParts();
    console.log(a);
 }
let today = new Date();
let birthday = new Date('December 17, 1995 03:24:00');
//let birthday = new Date('1995-12-17T03:24:00');
//let birthday = new Date(1995, 11, 17);            // the month is 0-indexed
//let birthday = new Date(1995, 11, 17, 3, 24, 0);
//let birthday = new Date(628021800000);

console.log(birthday);
console.log(today);