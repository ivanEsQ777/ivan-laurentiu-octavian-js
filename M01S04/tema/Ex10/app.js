var person = {
  name: 'Ivan',
  surname: 'Laurentiu',
  age: 27,
  petOwner: true,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node.js',
    'jquery'
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29
    }
  ]
};

console.warn('Folosind obiectul person si forEach, afiseaza in consola skillurile pe care le are persoana.');

person.skills.forEach(function (skill) {
  console.log(skill);
});

console.warn(' In mod similar, afiseaza skillurile care nu incep cu j.');

person.skills.forEach(function (skill) {
  if (skill[0] !== 'j' ) {
    console.log(skill);
  }
});

console.warn('Folosind forEach afiseaza propozitia: "Numele mari ale prietenilor mei sunt xxx, xxx, xxx."');

message = 'Numele mari ale prietenilor mei sunt: ';

person.friends.forEach(function (friend, i, friends) {
  let separator = ', ';
  if (i === 1) {
    separator = ' si ';
  } 
  if (i >= 2) {
    separator = '.';
  }
  message += friend.name + separator;
});

console.log(message);

console.warn('Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends');

let totalAge = 0;
person.friends.forEach(function (friend) {
  let friendAge = friend.age;
  totalAge += friendAge;
});

console.log(totalAge);

console.warn('Folosind forEach, afiseaza suma anilor de nastere a persoanelor');

let currentYear = new Date().getFullYear();
let totalBirthYears = 0;

person.friends.forEach(function (friend) {
  let friendAge = friend.age;
  let birthYear = currentYear - friendAge;
  totalBirthYears += birthYear;
});

console.log(totalBirthYears);

console.warn('Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.');


person.friends.forEach(function (friend) {
let personAge = person.age;
let friendAge = friend.age;
let ageDiff = personAge - friendAge;
console.log(`Diferenta de varsta dintre ${person.name} ${person.surname} si ${friend.name} ${friend.surname} este de ${Math.abs(ageDiff)} ani.`);
});

console.warn('Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa numele complet al prietenilor din arrayul friends.');

person.friends.reverse();

person.friends.forEach(function (friend) {
  console.log(`${friend.name} ${friend.surname}`);
});

person.friends.reverse();

