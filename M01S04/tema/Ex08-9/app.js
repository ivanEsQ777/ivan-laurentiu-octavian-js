console.warn('Folosind metoda prompt de doua ori cere utilizatorului un numar si o limita superioara apoi afiseaza toti multiplii de numar intre 5 si limita superioara introduse (document html nou).');

var inputNumber = prompt('Introduceti numarul: ');
var upperLimit = prompt('Introduceti limita superioara: ');
var i = 5;

while (i <= upperLimit) {
  if (i % inputNumber === 0) {
    console.log(i);
  }

  i++;
}