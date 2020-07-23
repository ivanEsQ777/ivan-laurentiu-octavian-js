$(document).ready(() => {
  //app.start();
  let $personForm = $('#personForm') 
  
  $personForm.validate({
    errorElement: 'p',
  });

  $personForm.on('blur input', 'input[name]', (event) => {
    let $personForm = $(event.delegateTarget);
    let isFormValid = $personForm.valid();
    let submitButton = $personForm.find('button[type="submit"]');

    if (isFormValid === true) {
      submitButton.prop('disabled', false)
    } else {
      submitButton.prop('disabled', 'disabled')
    }
  });
});