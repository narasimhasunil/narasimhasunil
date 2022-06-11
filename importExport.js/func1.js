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

module.exports = {addValue, oddEven};