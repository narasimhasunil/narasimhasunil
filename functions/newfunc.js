function sample1 (a, b, c) {
    sum = (a*b)/c;
    return sum;
}

function multi4 (proValue) {
    if ( proValue %4 === 0 ){
       console.log('product is a multiple of 4')
    } else {
        console.log('product is not a multiple of 4')
    }
}

const samp = sample1(20, 30, 2);
console.log(samp);
multi4(samp);


const samp2 = sample1(30,55, 5);
console.log(samp2);
multi4(samp2);


function exm (a, b, callback) {
    callback (a+b)
}

exm (29, 31, function(sum) {
        if (sum %2 ===0) {
            console.log(`the sum of values is even`);
        } else {
            console.log('odd');
        }
    }
)

exm (47, 56, (pro) => {
        if (pro % 6 === 0) {
            console.log('multiple of 6');
        } else {
            console.log('not a factor of 6');
        }
    }
)
