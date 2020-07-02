let Car = {
  make: '',
  color: '',
  wheels: '',
  speed: 0,
  topSpeed: 140,
  topReverseSpeed: -70,
  displaySpeed: function () {
    console.log(`Viteza curenta este: ${this.speed}`);
  },
  accelerate: function () {
    this.setSpeed(++this.speed);
  },
  decelerate() {
    this.setSpeed(--this.speed);
  },
  setSpeed: function (speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
      this.displaySpeed();
      return;
    }
    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
      this.displaySpeed();
      return;
    }
    this.speed = speed;
    this.displaySpeed();
  }
};

let audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;
audi.topSpeed = 220;

console.log(audi);

// Adauga metoda setSpeed(), proprietatile topSpeed si topReverseSpeed si implementeaza protectiile deja cunoscute.
// Seteaza topSpeed la 140 apoi ruleaza metoda setSpeed() pentru a face viteza curenta 140. 
// Ruleaza metoda accelerate().
