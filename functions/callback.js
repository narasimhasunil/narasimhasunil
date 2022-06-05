function sample (a, b, callback) {
    callback (b-a);
}

sample (9, 6, function(res) {
    if (res %3 === 0){
        console.log('multiple of 3')
    } else {
        console.log('not a multiple of 3')
    }
})