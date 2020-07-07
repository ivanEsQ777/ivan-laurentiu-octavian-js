$(document).ready(() => {
  let $form = $('#personForm');
  let $personDetails = $('.person-details');

  $form.on('submit', (event) => {
    let formFields = $(event.currentTarget).serializeArray();
    let $personFragment = $('div');

    $personDetails.empty();

    formFields.forEach((field) => {
      $personFragment.append($('<p>', {
        text: `${field.name[0].toUpperCase()}${field.name.slice(1)}: ${field.value}`,
      }));
    });

    $personFragment.appendTo($personDetails);
    // $personDetails.empty().append($personFragment);

    event.currentTarget.reset();
    event.preventDefault();
  });
});