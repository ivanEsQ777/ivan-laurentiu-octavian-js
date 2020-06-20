let button = document.getElementById('clicker');

button.addEventListener('click', function() {
  alert('Ai apasat butonul')
});

let button1 = document.getElementById('query');

button1.addEventListener('click', function() {
  let userAge = prompt('Introduceti varsta dumneavoastra');
  console.log(`Ai ${userAge} de ani.`);
});

let message = document.getElementById('message');
message.innerText = 'ai 27 de ani.';


