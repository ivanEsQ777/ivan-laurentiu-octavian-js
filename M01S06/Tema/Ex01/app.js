let car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  topSpeed: 160,
  topReverseSpeed: -50,
  isTrunkOpen: false,
  areLightsOn: false,
  accelerate: function () {
    this.speed++;
  },
  decelerate: function () {
    this.speed--;
  },
  stop: function () {
    this.speed = 0;
  },
  setSpeed: function (s) {
    this.speed = s;
    if (s >= this.topSpeed) {
      this.speed = this.topSpeed;
    }
    if (s <= this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
    }
  },
  openTrunk: function () {
    this.isTrunkOpen = true;
  },
  closeTrunk: function () {
    this.isTrunkOpen = false;
  },
  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },
  flashLights: function () {
    this.turnLightsOn();

    window.setTimeout(() => {
      this.turnLightsOff();
    }, 3000);
  }
};

console.log(`Masina era marca ${car.make} si se deplasa cu viteza ${car.speed} km/ora.`);

console.warn('Decelereaza masina cu 5 unitati apoi afisaza propozitia: "Viteza noua este speed km/h".');
for (let i = 0; i <= 4; i++) {
  car.decelerate();
}

console.log(`Viteza noua este de ${car.speed} km/ora.`);

console.warn(`Adauga o metoda numita stop() care sa faca proprietatea speed 0, apoi afiseaza viteza.`);

car.stop();
console.log(`Viteza este ${car.speed}`);

car.setSpeed(180);
console.log(car.speed);

car.setSpeed(-85);
console.log(car.speed);

car.setSpeed(120);
console.log(car.speed);





