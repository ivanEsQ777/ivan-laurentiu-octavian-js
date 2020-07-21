document.addEventListener('DOMContentLoaded', () => {
  let stage = document.querySelector('.stage');
  let hero = document.querySelector('.hero');
  let controls = document.querySelector('.controls');
  let keyDownElement = document.getElementById('key-down');
  let keyUpElement = document.getElementById('key-up');

  keyDownElement.addEventListener('click', (event) => {
    moveHero('y', 'fw');
  });

  keyUpElement.addEventListener('click', () => {
    moveHero('y', 'back');
  });

  controls.addEventListener('click', (event) => {
    if (event.target !== undefined && event.target.nodeName === 'BUTTON') {
      let button = event.target;
      let direction = button.id.split('-')[1];
      let axis = 'x';
      let normalizedDirection = 'fw';

      switch(direction) {
        case 'right':
          axis = 'x';
          normalizedDirection = 'fw';
          moveHero(axis, normalizedDirection);
          break;
        case 'left':
          axis = 'x';
          normalizedDirection = 'back';
          moveHero(axis, normalizedDirection);
          break;
      }
    }
  });

  document.addEventListener('keydown', (event) => {
    console.log(event);
    console.log(event.code);
  });

  function moveHero(axis, direction) {
    let step = 20;
    let cssProperty = axis === 'x' ? 'left' : 'top';
    let currentPosition = hero.style[cssProperty].length === 0 ? 0 : hero.style[cssProperty];
    let unitlessPosition = parseInt(currentPosition);

    let newPosition = direction === 'fw' ? unitlessPosition + step : unitlessPosition - step;

    if (newPosition <= 0) {
      newPosition = 0;
    }

    if (axis === 'y' && newPosition >= stage.clientHeight - hero.clientHeight) {
      newPosition = stage.clientHeight - hero.clientHeight;
    }

    if (axis === 'x' && newPosition >= stage.clientWidth - hero.clientWidth) {
      newPosition = stage.clientWidth - hero.clientWidth;
    }

    hero.style[cssProperty] = `${newPosition}px`;
  }
});