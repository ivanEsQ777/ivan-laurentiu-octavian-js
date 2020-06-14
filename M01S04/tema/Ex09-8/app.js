console.warn('Folosind metoda prompt de trei ori cere utilizatorului un numar, o limita inferioara si o limita superioara apoi afiseaza toti multiplii de numar intre limita inferioara si limita superioara introduse. (fisier nou)');

var inputNumber = prompt('Introduceti numarul: ');
var lowerLimit = prompt('Introduceti limita inferioara: ');
var upperLimit = prompt('Introduceti limita superioara: ');
var i = lowerLimit;

do {
  if (i % inputNumber === 0) {
    console.log(i);
  }
  i++;
} while (i <= upperLimit);