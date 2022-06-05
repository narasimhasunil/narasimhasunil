sum (34, 52, 153, 76, 89);

function sum (...arg) {
    console.log(arg);
    let  sumRes = 0;
    for (let i = 0; i < arg.length; i++) {
        
        sumRes = sumRes + arg[i];
    }
    console.log(sumRes);
}
// 8 , 6, 10, 15, 12
// 8-8, 8-6, 8-10, 8-15, 8- 12
// 0, 2, -2, -7, -4
// 2, 0, -2, -4, -7

