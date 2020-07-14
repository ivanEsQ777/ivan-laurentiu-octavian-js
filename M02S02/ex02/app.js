$(document).ready(() => {
  let $form = $('#personForm');
  let $personDetails = $('.person-details');

  let textCaptureForm = () => {
    let $formFragment = $('<div>');

    return $formFragment
      .append('<label for="skill-rename">Editare</label>')
      .append(
        $('<input>', {
          type: 'text',
          name: 'skill-rename',
        }),
      )
      .append(
        `
          <button type="button" class="skill-edit-save">Salvare</button>
          <button type="button" class="skill-edit-cancel">Anulare</button>
        `,
      );
  };

  $form.on('submit', (event) => {
    let formFields = $(event.currentTarget).serializeArray();
    let $personFragment = $('<div>');

    $personDetails.empty();

    formFields.forEach((field) => {
      let $labelElement = $(`input[name="${field.name}"]`).prev();
      let displayName = $labelElement.text();

      $personFragment.append(
        $('<p>', {
          text: `${displayName} ${field.value}`,
        }),
      );
    });

    $personFragment.appendTo($personDetails);
    // $personDetails.empty().append($personFragment);

    event.currentTarget.reset();
    event.preventDefault();
  });

  $('#addSkill').on('click', (event) => {
    // let skillName = $(event.currentTarget).prev().val();
    let $skillInput = $(event.currentTarget).prev();
    let skillName = $skillInput.val();

    if (skillName.length < 1) {
      return;
    }

    let ulClass = 'skills-ul';
    let $skillsUl = $(`.${ulClass}`);

    if ($skillsUl.length < 1) {
      $skillsUl = $('<ul>', {
        class: ulClass,
      })
        .appendTo('.person-skills')
        .on('click', '.skill-delete, .skill-edit-cancel', (event) => {
          // console.log(event.currentTarget);
          $(event.currentTarget).parent().remove();
        })
        .on('click', '.skill-edit', (event) => {
          $(event.currentTarget).parent().prepend(textCaptureForm());
        })
        .on('click', '.skill-edit-save', (event) => {
          let $skillEditSave = $(event.currentTarget);
          let newSkillName = $skillEditSave.prev().val();

          if (newSkillName.length < 1) {
            return;
          }

          $skillEditSave.parents('li').find('span').text(newSkillName);

          $skillEditSave.parent().remove();
        });
    }

    $skillsUl.append(
      `
        <li>
          <span>${skillName}</span>
          <button class="skill-delete">Sterge</button>
          <button class="skill-edit">Editeaza</button>
        </li>
      `,
    );

    $skillInput.val('');
  });

  $('#has-pets').on('change', (event) => {
    let $checkBox = $(event.currentTarget);
    let isChecked = $checkBox.is(':checked');
    let $petForm = $checkBox.siblings('.pet-form');

    if (isChecked) {
      $petForm.show();
    } else {
      $petForm.hide();
    }
  });

  $('#addPet').on('click', (event) => {
    let $addPetButton = $(event.currentTarget);
    let $petForm = $addPetButton.parent();

    let $fields = $petForm.children('input[name]');
    // re-use this code
    let formFields = [];
    $fields.each((index, domElement) => {
      let $field = $(domElement);

      formFields.push({
        name: $field.attr('name'),
        value: $field.val(),
      });
    });
    // re-use this code

    console.log(formFields);
  });
});