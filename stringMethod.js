const str = 'msDhoni';

const res = str.slice(2,5); // ending index position wil be excluded
console.log(res);

const res2 = str.slice(2); // if no ending index position , characters till last index position will be taken.
console.log(res2);

const resOfSubstring = str.substring(2,5);
console.log(resOfSubstring);

const resOfSubstring2 = str.substring(2);
console.log(resOfSubstring2);

// eg program on replace
const strRep = 'I am a batman';
const resOfReplace = strRep.replace('batman111', 'superman');
console.log(resOfReplace);

console.log(strRep.toUpperCase());
console.log(strRep.toLowerCase());

const stTrim = "     I am from guntur     ";
console.log(stTrim.length);
const resTrim = stTrim.trim();
console.log(resTrim.length);

const arr = [1,2,3,4,5,6];
console.log(arr.slice(2,5));


const s = 145732;
const sRes = s.toString();
console.log(sRes, typeof sRes);