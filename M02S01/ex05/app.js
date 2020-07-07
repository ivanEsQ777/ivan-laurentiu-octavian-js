class Shape {
  constructor(
    posX,
    posY, 
    width, 
    height, 
    color, 
    borderColor
  ) {
    this.posX = posX; 
    this.posY = posY; 
    this.height = height; 
    this.width = width; 
    this.color = color; 
    this.borderColor = borderColor;
  }

  setPosX(x) {
    this.posX = x;
  }

  setPosY(y) {
    this.posY = y;
  }

  setWidth(w) {
    this.width = w;
  }

  setHeight(h) {
    this.height = h;
  }

  setColor(c) {
    this.color = c; 
  }

  setBorderColor(bc) {
    this.borderColor = bc;
  }

  render () {
    this.circle.classList.add('shape--circle');
    this.rectangle.classList.add('shape--rectangle')

    document.body.appendChild(this.circle);
    document.body.appendChild(this.rectangle);

    this.circle.style.backgroundColor = this.color;
    this.circle.style.borderColor = this.borderColor;

    this.rectangle.style.backgroundColor = this.color;
  }
  circle = document.createElement('div');
  rectangle = document.createElement('div');
  square = document.createElement('div');
}

class Rectangle extends Shape {
  constructor(
    posX,
    posY, 
    width,
    height, 
    color, 
    borderColor
  ) {
    super(
      posX,
      posY,
      width,
      height,
      color,
      borderColor
    );
  }
}

class Circle extends Shape {
  constructor(
    posX,
    posY, 
    radius, 
    color, 
    borderColor
  ) {
    super(
      posX,
      posY, 
      radius, 
      radius, 
      color, 
      borderColor
    );

    this.borderRadius = this.setBorderRadius(radius);
  }

  setBorderRadius(br) {

    return br;
  }
}

let circle = new Shape(40, 40, 200, 200, 'red', 'blue');
circle.render();
let rectangle = new Rectangle(80, 80, 200, 200, 'blue', 'red');
rectangle.render();




