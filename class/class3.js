// unnamed
let Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(Rectangle.name);
  // output: "Rectangle"
  
  // named
  let Rectangle1 = class Rectangle2 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    area () {
        return this.height*this.width;
    }

  };
  console.log(Rectangle1.name);
  // output: "Rectangle2"
  
  const obj = new Rectangle1 (10,5);

  console.log(obj.area());