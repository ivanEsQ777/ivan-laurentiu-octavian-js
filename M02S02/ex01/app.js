// var p = document.createElement('p');
// p.innerText = 'Textul care trebuie sa apara in paragraf';
// p.id = 'myParagraph';
// p.classList.add('clase', 'de', 'css');

// document.body.appendChild(p);

let $p = $('<p>', {
  id: 'myParagraph',
  text: 'Textul care trebuie sa apara in paragraf',
  class: 'clasa de css',
});

let $body = $('body');

// Salveaza obiectul jQuery $('body') intr-o variabila numita $body si foloseste-o in metoda appendTo().
// https://api.jquery.com/appendTo/ 

$p.appendTo($body);

// Creaza inca un paragraf cu idul message care sa contina textul: “Parola nu trebuie sa fie mai mica de 5 caractere.”.
// Folosind metoda append a obiectului $body, adauga noul obiect in DOM. 

let $p2 = $('<p>', {
  id: 'message',
  text: 'Parola nu trebuie sa fie mai mica de 5 caractere.',
}); 

$body.append($p2);

// https://api.jquery.com/append/ 
// Dupa ce l-ai adaugat, foloseste dupa 5 secunde metoda addClass a noului obiect pentru a ii adauga clasa error.
// https://api.jquery.com/addClass/ 

setTimeout(() => {
  $p2.addClass('error');
}, 5000);

// Selecteaza paragraful anterior (#myParagraph) si schimba textul sau in textul: “Am schimbat dinamic acest paragraf.” Folosind metoda .text() 
// https://api.jquery.com/text/

$('#myParagraph').text('Am schimbat dinamic acest paragraf.');

// Creeaza un element de tip span cu idul example si cu textul “ParolaMea” si adauga-l la cel de-al doilea paragraf folosind metoda .appendTo()

let $passwordSpan = $('<span>', {
  id: 'example',
  text: 'ParolaMea',
}).appendTo($p2);



// Creeaza un element de tip div cu clasa container apoi imbraca cele doua paragrafe cu el folosind metoda .wrap() 

let $wrappingDiv = $('<div>', {
  class: 'container',
});

// $('.nimic').add($p).add($p2).wrap($wrappingDiv);

$body.append($wrappingDiv);
$p.appendTo($wrappingDiv);
$p2.appendTo($wrappingDiv);

// https://api.jquery.com/wrap/ 
// Creeaza un element de tip h2 cu textul “Mesaje” si adauga-l la inceputul div-ului cu clasa container folosind metoda .prependTo()
// https://api.jquery.com/prependTo/

$('<h2>Mesaje</h2>').prependTo($wrappingDiv);


