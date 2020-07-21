window.addEventListener('load', () => {
  let form = document.getElementById('personForm');
  let submitButton = form.querySelector('button');
  let pristine = new Pristine(form);

  manageSubmitButton();

  function resetErrorMessages() {
    let errorMessages = form.querySelectorAll('.error-message');

    errorMessages.forEach((message) => {
      message.remove();
    });
  }

  function resetErrors() {
    let inputs = form.querySelectorAll('input[name]');

    inputs.forEach((input) => {
      input.classList.remove('has-error');
    });
  }

  function manageSubmitButton() {
    let valid = pristine.validate();
    // if (valid === false) {
    //   submitButton.disabled = true;
    // }

    submitButton.disabled = valid ? false : true;
  }


  form.addEventListener('change', (event) => {
    resetErrors();
    resetErrorMessages();
    manageSubmitButton();

    let errorList = pristine.getErrors();
    if (errorList.length > 0) {
      errorList.forEach((error) => {
        let p = document.createElement('p');
        p.innerText = error.errors[0];
        p.classList.add('error-message');

        error.input.insertAdjacentElement('afterend', p);
        error.input.classList.add('has-error');
      });
    }
  });
});

