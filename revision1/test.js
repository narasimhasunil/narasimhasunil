class StudentDetails {
    constructor(name, age, contact){
        this.name = name;
        this.age = age;
        this.contact = contact
    }
};

const obj = new StudentDetails('mounish', 29, 9848022338);
const obj1 = new StudentDetails('shyam', 33, 1234567890);
const obj2 = new StudentDetails('sunil', 29, 9490601223);
const obj3 = new StudentDetails('gopi', 22, 9490601233);

//console.log(obj, obj2, obj3);


for (i=0; i<obj.length; i++) {
    console.log(obj[i]);
}