let text;
switch (new Date().getDay()) {
    case 6:
    text = "Today is Saturday";
    break; 
  case 0:
    text = "Today is Sunday";
    break; 
  default: 
    text = "Looking forward to the Weekend";
  }

console.log(text);

const hour = new Date().getHours(); 
let greeting;

if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 21){
    greeting = "Good evening";
  } else {
    greeting = 'Good Night';
  }

console.log(greeting);

let text1 = "";

for (let i = 0; i < 5; i++) {
  text1 += "The number is " + i + "<br>";
}

const samp = ['sunil','mouni','phani'];

console.log(samp[samp.length-1]);