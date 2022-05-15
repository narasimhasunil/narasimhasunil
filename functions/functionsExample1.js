
const sumRes = sum (4, 6);
evenOdd(sumRes);
const sumRes2 = sum (12, 23);
evenOdd(sumRes2);
const sumRes3 = sum (12222, 23);
evenOdd(sumRes3);

function sum (a, b) {
    let res = a + b;
    return res;
}

function evenOdd (sumValue) {
    if (sumValue % 2 === 0) {
        console.log(`${sumValue} is Even number`);
    } else {
        console.log(`${sumValue} is odd number`);
    }
}