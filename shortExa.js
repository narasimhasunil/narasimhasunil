// 8 , 6, 10, 15, 12
// 8-8, 8-6, 8-10, 8-15, 8- 12
// 0, 2, -2, -7, -4
// 2, 0, -2, -4, -7

const arry1 = [8, 6, 10, 15, 12];
    
let arry = [arry1[0]-arry1[0], arry1[0] - arry1[1], arry1[0]-arry1[2], arry1[0]- arry1[3], arry1[0]-arry1[4]];

console.log(arry);

let aLen = arry.length;

let arry2 = [];
for (let i = 0; i < aLen; i++) {
  arry2 = i + arry[i] ;
}
console.log(arry2);

