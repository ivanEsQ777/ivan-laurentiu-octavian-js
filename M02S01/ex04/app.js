class Car {
  constructor(
    left = 100,
    top = 100,
    color,
    topColor,
    wheelColor,
    wheelCapColor,
  ) {
    this.left = left;
    this.top = top;
    this.color = color;
    this.topColor = topColor ? topColor : color;
    this.wheelColor = wheelColor;
    this.wheelCapColor = wheelCapColor;
  }

  areLightsOn = false;
  areHazardsOn = false;

  frame = document.createElement('div');
  car = document.createElement('div');
  carTop = document.createElement('div');
  carBody = document.createElement('div');
  lightBack = document.createElement('div');
  lightFront = document.createElement('div');
  wheelBack = document.createElement('div');
  wheelFront = document.createElement('div');
  wheelCapBack = document.createElement('div');
  wheelCapFront = document.createElement('div');

  turnLightsOn () {
    this.areLightsOn = true;

    this.lightFront.classList.add('light--on');
  }

  turnLightsOff () {
    this.areLightsOn = false;

    this.lightFront.classList.remove('light--on');
  }

  engageBrake () {
    this.isBrakeOn = true;

    this.lightBack.classList.add('light--on');
  }

  disengageBrake () {
    this.isBrakeOn = false;

    this.lightBack.classList.remove('light--on');
  }

  toggleHazardsOn () {
    this.areHazardsOn = true;
    this.turnLightsOn();
    this.engageBrake();
  }

  toggleHazardsOff () {
    this.areHazardsOn = false;
    this.turnLightsOff();
    this.disengageBrake();
  }

  toggleHazards () {
    this.toggleHazardsOff();

    window.setTimeout(() => {
      this.toggleHazardsOn();
    }, 2000);
    window.setTimeout(() => {
      this.toggleHazardsOff();
    }, 4000);
    window.setTimeout(() => {
      this.toggleHazardsOn();
    }, 6000);
    window.setTimeout(() => {
      this.toggleHazardsOff();
    }, 8000);
    window.setTimeout(() => {
      this.toggleHazardsOn();
    }, 10000);
    window.setTimeout(() => {
      this.toggleHazardsOff();
    }, 12000);
  }

  moveFrame (left, top) {
    if (!left || !top) {
      return;
    }

    this.left = left;
    this.top = top;

    this.frame.style.cssText = `left: ${this.left}px; top: ${this.top}px;`;
  }

  setColor (color) {
    if (!color) {
      return;
    }

    this.color = color;

    this.car.style.backgroundColor = this.color;
  }

  setTopColor (color) {
    if (!color) {
      return;
    }

    this.topColor = color;

    this.carTop.style.backgroundColor = this.topColor;
  }

  setWheelColor (color) {
    if (!color) {
      return;
    }

    this.wheelColor = color;
    this.wheelBack.style.backgroundColor = this.wheelColor;
    this.wheelFront.style.backgroundColor = this.wheelColor;
  }

  setWheelCapColor (color) {
    if (!color) {
      return;
    }

    this.wheelCapColor = color;
    this.wheelCapFront.style.backgroundColor = this.wheelCapColor;
    this.wheelCapBack.style.backgroundColor = this.wheelCapColor;
  }

  render () {
    this.frame.classList.add('frame');
    this.frame.style.cssText = `left: ${this.left}px; top: ${this.top}px;`;

    //create car div
    this.car.classList.add('car', 'frame__car');
    this.car.style.backgroundColor = this.color;
    this.frame.appendChild(this.car);

    //create car top
    this.carTop.classList.add('car__top');
    this.carTop.style.backgroundColor = this.topColor;
    this.car.appendChild(this.carTop);

    //create car body
    this.carBody.classList.add('car__body');
    this.car.appendChild(this.carBody);

    //create lights
    this.lightBack.classList.add('light', 'light--back');
    this.lightFront.classList.add('light', 'light--front');
    this.carBody.appendChild(this.lightBack);
    this.carBody.appendChild(this.lightFront);

    //create wheels
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.carBody.appendChild(this.wheelBack);
    this.carBody.appendChild(this.wheelFront);

    //create hubcap
    this.wheelCapBack.classList.add('wheel__cap');
    this.wheelCapFront.classList.add('wheel__cap');
    this.wheelBack.appendChild(this.wheelCapBack);
    this.wheelFront.appendChild(this.wheelCapFront);

    document.body.appendChild(this.frame);
  }
}

let car = new Car(20, 20, 'black', 'black', 'red');
car.render();
