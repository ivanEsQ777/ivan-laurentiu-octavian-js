let breakpoint = 650;

function displayAlert() {
  alert('Butonul a fost apasat');
}

document.addEventListener('DOMContentLoaded', () => {
  let windowWidth = window.innerWidth;
  let buttonElement = document.querySelector('.btn');

  if (windowWidth >= breakpoint) {
    buttonElement.addEventListener('click', displayAlert);
  }

  window.addEventListener('resize', () => {
    let windowWidth = window.innerWidth;

    if (windowWidth >= breakpoint) {
      buttonElement.addEventListener('click', displayAlert);
    } else {
      buttonElement.removeEventListener('click', displayAlert);
    }
  });
});
