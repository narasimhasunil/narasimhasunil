const arguements = process.argv;

const firstInput = arguements[2];
const secondInput = arguements[3];
const oper = arguements[4];
console.log(oper);
let res;

switch(oper) {
    case "+": 
        res = parseInt(firstInput) + parseInt(secondInput);
        break;
    case "-": 
        res = parseInt(firstInput) - parseInt(secondInput);
        break;
    case "*": 
        res = parseInt(firstInput) * parseInt(secondInput);
        break;
    case "/": 
        res = parseInt(firstInput) / parseInt(secondInput);
        break;
    case "%": 
        res = parseInt(firstInput) % parseInt(secondInput);
        break;
    default :
        console.log('it is not defined');
  }

  console.log(res);



