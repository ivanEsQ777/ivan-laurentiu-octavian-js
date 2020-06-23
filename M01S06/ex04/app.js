(() => {
  let showMessage = (message) => {
    let messageParagraph = document.createElement('p');

    messageParagraph.innerText = message;
    messageParagraph.classList.add('message');

    document.body.appendChild(messageParagraph);

    setTimeout(() => {
      messageParagraph.remove();
    }, 1000);
  };

  document.addEventListener('DOMContentLoaded', () => {
    let stage = document.querySelector('.stage');

    stage.addEventListener('mouseover', () => {
      console.log('mousul este pe scena');
      showMessage('Mousul este pe scena');
    });

    stage.addEventListener('mouseout', () => {
      console.log('mousul nu este pe scena');
      showMessage('Mousul nu este pe scena');
    });
  });
})();