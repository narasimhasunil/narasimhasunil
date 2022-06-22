sumRes = sumOfNum (4, 5);
evenOdd(sumRes);
sumRes1 = sumOfNum (6, 7);
evenOdd(sumRes1);
sumRes2 = sumOfNum (2, 8);
evenOdd(sumRes2);

function sumOfNum (x, y) {
   
    let sum = x + y;
    return sum;
}

function evenOdd (sumValue) {
    if (sumValue %2 === 0) {
        console.log(`sum of the given numbers is even`);
    } else {
        console.log('sum of the given numbers is odd');
    }
}