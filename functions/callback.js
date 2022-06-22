function sample (a, b, call) {
    call (a+b);
}

sample (7, 6, function(res) { //call = function(res)
    if (res %3 === 0){
        console.log('given sum ' +res+ ' is multiple of 3');
    } else {
        console.log('given sum ' + res + ' is not a multiple of 3');
    }
})