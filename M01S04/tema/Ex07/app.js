var friends = [
  {
    name: 'Ivan',
    surname: 'Laurentiu'
  },
  {
    name: 'Larry',
    surname: 'Larryson'
  },
  {
    name: 'Steve',
    surname: 'Stevenson'
  },
  {
    name: 'Caron',
    surname: 'Carolson'
  },
  {
    name: 'Andra',
    surname: 'Andrason'
  }
];


console.warn('Folosind o bucla for afiseaza proprietatea name a tuturor obiectelor din arrayul friends.');
var length = friends.length;

for (i = 0; i < length; i++) {
  console.log(friends[i].name);
}

console.warn('Afiseaza numele complet al tuturor prietenilor.');

for (i = 0; i < length; i++) {
  console.log(`${friends[i].name} ${friends[i].surname}`);
}

console.warn('Folosind keywordul break, afiseaza numele complet al prietenilor dar opeste bucla la primul surname care are numarul de caractere mai mare sau egal decat 9.');

for (i = 0; i < length; i++) {
  var surname = friends[i].surname;
  var charLength = surname.length;

  console.log(surname);

  if (charLength >= 9) {
    break;
  }
}