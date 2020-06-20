let person = {
  getName: function() {
    return 'Ivan Laurentiu';
  },
  getAge: function() {
    return 27;
  }
};

console.warn('Afiseaza numele intreg al persoanei folosind metoda getName()');

console.log(person.getName());

console.warn('Afiseaza varsta persoanei folosind metoda getAge()');

console.log(person.getAge());

console.warn('Afiseaza anul de nastere al persoanei, folosind anul curent si metoda getName()');

let currentYear = new Date().getFullYear();
let personAge = person.getAge();
console.log(currentYear - personAge);

console.warn('Afiseaza propozita: “Ma numesc xxx yyy m-am nascut acum aa ani in anul zzzz');

console.log(`Ma numesc ${person.getName()}, m-am nascut acum ${person.getAge()}de ani, in anul ${currentYear - personAge}.`);