const samp1 = [21, 12, 02, 42, 32];

const res = samp1.map((value, index, sample) => {
   return value * 5
}
)
console.log(res);

const res2 = res.map(x => x * 2);

console.log(res2);