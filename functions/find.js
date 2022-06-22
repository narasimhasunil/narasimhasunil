const abc = [12, 23, 34, 56, 'mounish', 'sunil'];

const xyz = abc.find( x => x > 30);

console.log(xyz);

const abc2 = [23, 34, 56, 78, 99];

const rs = value => value > 70;

console.log(abc2.findIndex(rs));