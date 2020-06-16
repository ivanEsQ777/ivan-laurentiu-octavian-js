// Folosind codul de la exercitiul 08, numeste functia care ruleaza la click clickHandler si foloseste-i numele ca parametru al metodei addEventListener in locul celei anonime. 
// Adauga un buton pe care scrie Elimina Evenimentul. 
// La click pe acest buton nou, foloseste metoda removeEventListener al variabilei button si foloseste numele clickHandler ca parametru.

let button = document.getElementById('clicker');
let removeButton = document.getElementById('remove');
let clickHandler = () => {
  alert('Ai apasat butonul!');
};

//callback
button.addEventListener('click', clickHandler);
removeButton.addEventListener('click', () => {
  button.removeEventListener('click', clickHandler);
});

