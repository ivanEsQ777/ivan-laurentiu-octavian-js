var person = {
  name: 'Ivan',
  surname: 'Laurentiu',
  age: 32,
  petOwnder: true,
  skills: [
    'html',
    'javascript',
    'css',
    'c++',
    'node.js',
    'jquery',
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

console.warn('Folosind obiectul person si un for, afiseaza in consola skillurile de pe pozitiile pare ale arrayului.');
var message = '';
var i = 0;

for (i = 0; i < person.skills.length; i++) {
  if (i % 2 === 0) {
    message = message + person.skills[i] + ' ';
  }
}

console.log(message.trim());

console.warn(' In mod similar, afiseaza skillurile care NU contin litera j.');


console.log(message.trim());

console.warn(' In mod similar, afiseaza skillurile care NU incep cu j.');

var message = '';

for (i = 0; i < person.skills.length; i++) {
  if (person.skills[i][0] !== 'j') {
    message = message + `${person.skills[i]} `;
  }
}

console.log(message.trim());

console.warn(' Folosind un for afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."');
message = 'Prietenii mei se numesc ';

for (i = 0; i < person.friends.length; i++) {
  var friendName = person.friends[i].name;
  var friendSurname = person.friends[i].surname;
  message = message + `${friendName} ${friendSurname}`;

  if(i === person.friends.length - 1) {
    message += '.';
  } else {
    message += ', ';
  }
}

console.log(message);

console.warn('Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca varsta este mai mare sau egala cu 30 de ani.');
var ageTotal = 0;

for (i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  if (friend.age >= 30) {
    ageTotal += friend.age;
  }
}

console.log(ageTotal);

console.warn(' Folosind un for, afiseaza suma anilor de nastere a persoanelor. ');
var yearsTotal = 0;
var currentYear = new Date(Date.now()).getFullYear();

for (i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var friendBirthYear = currentYear - friend.age;
  yearsTotal += friendBirthYear;
}

console.log(yearsTotal);

console.warn(' Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends doar daca aceasta este mai mare de 2 ani. ');

for (i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var diff = person.age - friend.age;

  if (diff > 2) {
    console.log(diff);
  }
}

console.warn(' Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ", doar daca varsta prietenului este impara. ');
message = '';

for (i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  if (friend.age % 2 === 0) {
    continue;
  }

  var diff = person.age - friend.age;
  message += `Intre ${person.name} si ${friend.name} este o diferenta de ${diff} ani. `;
}

console.log(message.trim());

console.warn(' Folosind proprietatea length a arrayului skills si o bucla for, afiseaza in ordine inversa elementele arrayului skills. Atentie, va trebui sa numeri invers, de la length la 0.');
message = '';

for (i = person.skills.length - 1; i >= 0; i--) {
  message += person.skills[i] + ' ';
}

console.log(message.trim());