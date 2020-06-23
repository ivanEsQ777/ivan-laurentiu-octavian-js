(() => {
  document.addEventListener('DOMContentLoaded', () => {
    let showButton = document.querySelector('#showButton');
    let toggleEventButton = document.querySelector('#toggleEventButton');
    let removeButton = document.querySelector('#removeButtons');
    let eventBound = true;

    let showAlert = () => {
      alert('Butonul a fost apasat');
    };

    showButton.addEventListener('click', showAlert);

    toggleEventButton.addEventListener('click', (event) => {
      let toggleEventButton = event.target;
      let paragraphElement = document.createElement('p');

      if (eventBound === true) {
        showButton.removeEventListener('click', showAlert);
        eventBound = false;
        toggleEventButton.innerText = 'Porneste afisarea.';
        paragraphElement.innerText = 'Alerta nu va fi afisata!';
      } else {
        showButton.addEventListener('click', showAlert);
        eventBound = true;
        toggleEventButton.innerText = 'Opreste afisarea.';
        paragraphElement.innerText = 'Alerta va fi afisata!';
      }

      document.body.appendChild(paragraphElement);
    });

    removeButton.addEventListener('click', () => {
      let confirmation = confirm('Esti sigur ca vrei sa elimini butoanele?');
      if (confirmation === true) {
        showButton.remove();
        toggleEventButton.remove();
      }
    });
  });
})();