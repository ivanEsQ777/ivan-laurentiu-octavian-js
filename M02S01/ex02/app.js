class Vehicle {
  constructor (
    make,
    color,
    wheels,
    speed,
    topSpeed = 160,
    topReverseSpeed = -50
  ) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;
  }

  displaySpeed () {
    console.log(`Viteza curenta este ${this.speed}`);
  }

  accelerate () {
    this.setSpeed(++this.speed);
  }

  decelerate () {
    this.setSpeed(--this.speed);
  }

  setSpeed (speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
      this.displaySpeed();
      return
    }
    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
      this.displaySpeed();
      return;
    }

    this.speed = speed;
    this.displaySpeed();
  }
}

class Car extends Vehicle {
  constructor (
    make,
    color,
    speed,
    topSpeed,
    topReverseSpeed
  ) {
    super(
      make,
      color,
      4,
      speed,
      topSpeed,
      topReverseSpeed
    );
  }
}

class Bicicle extends Vehicle {
  constructor (
    make,
    color,
    speed,
    topSpeed = 70
  ) {
    super(make, color, 2, speed, topSpeed, 0);
  }

  decelerate () {
    if (--this.speed < 0) {
      this.speed = 0;
    }

    this.displaySpeed();
  }
}

class Tricycle extends Vehicle {
  constructor (
    make,
    color,
    speed,
    topSpeed = 70,
    topReverseSpeed = -10
  ) {
    super(make, color, 3, speed, topSpeed, topReverseSpeed);
  }
}

// Instantiaza o bicicleta (marca Pegas, culoare red, viteza curenta 8, si viteza maxima 20). O poti stoca intr-o variabila numita bike. 
// Seteaza viteza instantei bike la 2
// Foloseste metoda decelerate() de trei ori, ce observi? 
// Seteaza viteza instantei bike la -10, ce observi?

let bike = new Bicicle('Pegas', 'red', 8, 20);

bike.setSpeed(-10);

// Creeaza o noua clasa care extinde Vehicle in mod similar cu Bicycle, numita Tricycle. Diferenta fiind ca o tricicleta are trei roti. 
// Instantiaza o tricicleta (marca Tryke, culoare red, viteza curenta 2, viteza minima -2, viteza maxima 9). O poti stoca intr-o variabila numita trike. 
// Seteaza viteza instantei trike la 0
// Foloseste metoda decelerate() de trei ori, ce observi? 
// Seteaza viteza instantei trike la -10, ce observi?

let trike = new Tricycle('Trike', 'red', 2, 9, -2);

// Clasa Vehicle nu protejeaza vehiculele de supraaccelerare si subaccelerare. Modifica metodele accelerate() si decelerate() astfel incat viteza sa nu poata scadea sau creste sub viteza maxima sau minima. 
// Seteaza viteza instantei trike la -10, ce observi?
// Creeaza o masina noua (marca Audi, culoare blue, viteza curenta 3, viteza maxima 140, viteza minima -50). 
// Seteaza viteza noii instante la 140, apoi ruleaza metoda accelerate(), ce observi?

let audi = new Car('audi', 'blue', 3, 140, -50);

audi.setSpeed(140);


