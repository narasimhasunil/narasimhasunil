const samp1 = 'sarkaru Vaari Paata'

//slice operation

console.log(samp1.slice(4,9)); //it excludes end posision

//substring operation

console.log(samp1.substring(5,13));

//replace operation

console.log(samp1.replace('Paata','Aata'));

//uppercase operation

console.log(samp1.toUpperCase());

//number to string conversion

const samp2 = 123456;
const samp3 = samp2.toString();

console.log(samp3, typeof samp3);

//trim operation

const samp4 = '     Mahesh Babu    ';

const samp5 = samp4.trim();
console.log(samp5.length);


