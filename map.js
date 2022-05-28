const samp1 = [21, 12, 02, 42, 32];

const res = samp1.map((value, index, sample) => {
   return value * 5
}
)
console.log(res);

const res2 = res.map(x => x * 2);

console.log(res2);

const samp2 = [2, 3, 4];

const res3 = samp2.map( num => num*num );

console.log(res3);

const res4 = res3.map( x => Math.sqrt(x));

console.log(res4);