let paragraphLog = (message) => {
  let logContainer = document.querySelector('.logs');
  let messageParagraph = document.createElement('p');

  if (!logContainer) {
    logContainer = document.createElement('div');
    logContainer.classList.add('logs');
    document.body.appendChild(logContainer);
  }

  messageParagraph.innerText = message;

  logContainer.appendChild(messageParagraph);
};

console.domlog = paragraphLog;