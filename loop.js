sum (2, 3, 4, 5);

function sum (...arg) {
    console.log(arg);
    let  sumRes = 0;
    for (let i = 0; i < arg.length; i++) {
        
        sumRes = sumRes + arg[i];
    }
    console.log(sumRes);
}