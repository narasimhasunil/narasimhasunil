// const studentData = [
//     { firstname : 'sunil', lastname : 'narasimha'},
//     { firstname : 'mounish', lastname : 'krishna'},
//     { firstname : 'seshu', lastname : 'sai'}
// ];
// for (i= 0;i< studentData.length;i=i+1){
//     console.log(studentData[i]);
// }

const obj1 = {name: 'sunil', age: 28, Phone: 9494060122};

obj1.address = 'Hyderabad';



for (const i in obj1) {
  console.log(`${i}: ${obj1[i]}`);

  if (i==='address') {
    console.log('address is a parameter of abj1')
  } else {
    console.log('address is not a paramenter of obj1');
  }
}
  
const str = 'moinisha'

console.log(str[0]);
