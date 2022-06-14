class Rectangle {
    constructor (lenght, breadth) {
        this.lenght = lenght;
        this.breadth = breadth;
    }
    area () {
        return this.lenght*this.breadth;
    }
}

const samp = new Rectangle(20, 15);

console.log(samp.area());