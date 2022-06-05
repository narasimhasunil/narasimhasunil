function example (x,y, call) {
    call (x - y);
}

example (257, 50, (res1) => {
        if (res1 %4 === 0) {
            console.log('product is multiple of 4');
        } else {
            console.log('product is not a multiple of 4');
        }
    })