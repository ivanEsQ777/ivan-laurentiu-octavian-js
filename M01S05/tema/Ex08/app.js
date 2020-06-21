let button = document.getElementById('clicker');

button.addEventListener('click', () => {
  alert('Ai apasat butonul')
});

let button1 = document.getElementById('query');

button1.addEventListener('click', () => {
  let userAge = prompt('Introduceti varsta dumneavoastra');
  console.log(`Ai ${userAge} de ani.`);

  let message = document.getElementById('message');
  message.innerText = `ai ${userAge} de ani.`;
});




