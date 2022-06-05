const samp = require("lodash");
let arr = [1, 2, 3, 4, 5, 6];
  
console.log(samp.chunk(arr, 4)); // to split an array

const samp2 = require("lodash");
let arr2 = [1, 2, 3, false, 5, 6, '', 0, 7, 'true', true];
  
console.log(samp2.compact(arr2)); // compact is used to remove falsely elemts from the array