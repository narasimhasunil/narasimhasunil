const exm = [23, 34, 43, 12, 09, 18];

const res = exm.filter((value, index, sample) => {
   return value<30
 }
)

console.log(res);

const exm2 = ['nasarimha', 'mounish', 'seshu', 'phani', 'hrudai', 'satya', 'srinath'];

const res2 = exm2.filter(word => word.length < 8);

console.log(res2);