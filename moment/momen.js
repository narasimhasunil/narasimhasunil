const moment = require('moment');

let now = moment();
console.log(now.format());
console.log(now.format("HH:mm:ss"));
//console.log(now.format("day-month-year"));
console.log(now.format("DD-MM-YYYY"));
console.log(now.format("mm-dd-yy"));
console.log(now.format("ddd, DD-MMM-Y")); 
console.log(now.format("DDD, DD/MMMM/Y")); 
console.log(now.format("LLLL")); 
console.log(now.format("LLL"));
console.log(now.format("LL"));
console.log(now.format("L"));
console.log(now.format("YYYY-MM-DDTHH:mm"));
console.log(now.format("YYYY-MM-DDTHH:mm:ss"));
console.log(now.format("YYYY-MM-DDTHH:mm:ss.SSS"));
console.log(now.format("HH:mm:ss.SSS"));
console.log(now.format("GGGG-[W]W"));
console.log(now.format("Z LTS"));
console.log(now.format("Do MMMM, Y"));



// play around this moment npm.
// play around this npm lodash
// play around this npm Yargs