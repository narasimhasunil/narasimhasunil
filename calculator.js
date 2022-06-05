// program for a simple calculator


const number1 = (('Enter first number: '));
const operator = parseFloat('Enter operator ( either +, -, * or / ): ');
const number2 = parseFloat(('Enter second number: '));

console.log(number2);
console.log(operator);
console.log(number2);

let result;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);


