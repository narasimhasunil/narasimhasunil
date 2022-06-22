class EmployeeDetails {
    constructor (firstname, lastname, age, workex, domin){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.workex = workex;
        this.domin = domin;
    }
}

const emp1 = new EmployeeDetails('gopi', 'krishna', 25, 2, 'admin');
const emp2 = new EmployeeDetails('sunil', 'rao', 28, 5, 'HR');

console.log(emp1);
console.log(emp2);