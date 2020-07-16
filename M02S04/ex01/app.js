let box = document.querySelector('.box');
let animationClass = 'animate-class';
let toggleButton = document.getElementById('apply-style');
let darkenButton = document.getElementById('darken');
let isClassApplyed = false;


setTimeout(() => {
  box.classList.add(animationClass);
  isClassApplyed = true;

  setTimeout(() => {
    box.classList.remove(animationClass);
    isClassApplyed = false;
  }, 2000)
}, 2000);

toggleButton.addEventListener('click', (event) => {
  let btn = event.currentTarget;
  box.classList.toggle(animationClass);

  isClassApplyed = !isClassApplyed;

  btn.innerText = isClassApplyed === true ? 'Elimina' : 'Aplica';

  // if (box.classList.contains(animationClass)) {
  //   btn.innerText = 'Aplica';
  // } else {
  //   btn.innerText = 'Elimina';
  //   }
});

darkenButton.addEventListener('click', () => {
  // box.style.backgroundColor = '#000';
  box.setAttribute('style', 'background-color: black');
});



