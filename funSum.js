
res1 = addValue (2,5);
oddEven (res1);

res2 = addValue (4,5);
oddEven (res2);

res3 = addValue (2,6);
oddEven (res3);

res4 = addValue (2,9);
oddEven (res4);

function addValue (x,y) {
    let sumValue = x + y;
    return sumValue;
}

function oddEven (result) {
    if (result %2 === 0) {
    console.log(`${result} is even`);
} else {
    console.log (`${result} is odd`);
}
}