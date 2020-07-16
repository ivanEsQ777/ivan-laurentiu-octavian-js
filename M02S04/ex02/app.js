let mainButtons = document.querySelectorAll('.btn');
let box = document.querySelector('.box');
let colorInput = document.getElementById('color-input');
let resetButton = document.getElementById('reset-bg');

mainButtons.forEach((button) => {
  button.addEventListener('click', () => {
    let colorName = button.innerText.toLowerCase();
    
    box.style.backgroundColor = colorName;
  });
});

colorInput.addEventListener('change', (event) => {
  let colorInput = event.currentTarget;
  let dynamicColorButton = colorInput.nextElementSibling;
  let selectedColor = colorInput.value;

  dynamicColorButton.style.backgroundColor = selectedColor;
});

colorInput.nextElementSibling.addEventListener('click', () => {
  box.style.backgroundColor = colorInput.value;
});

resetButton.addEventListener('click', () => {
  box.removeAttribute('style');
});