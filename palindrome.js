const name1 = 'tenet';

//to find out the given variable is palindrome or not
//1st split the string
//2nd reverse the string
//then join the string
//finally compaare the result and initial variable

const name1Split = name1.split('');
const name1Reversed = name1Split.reverse();
const joinReversedName = name1Reversed.join('');

const finalname = joinReversedName;

console.log(finalname);

if (name1 === finalname) {
    console.log(`Giving string ${name1} is a palindrome`);
} else {
    console.log('Given string ' + name1 + 'is not a palindrome');
}