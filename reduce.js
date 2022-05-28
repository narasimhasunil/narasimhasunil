const arr = [10, 13, 25, 67, 78, 89];

const res = arr.reduce((pv, cv, ci, array) => {
    // console.log(pv, cv);
    return pv + cv;
});

console.log(res);