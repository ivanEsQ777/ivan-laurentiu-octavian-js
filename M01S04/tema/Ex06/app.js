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

console.warn('Folosind obiectul person si un for, afiseaza in consola skillurile pe care le are persoana ');

var i;
var skillsLenght = person.skills.length;
var friendsLength = person.friends.length;

for (i = 0; i < skillsLenght; i++) {
  console.log(person.skills[i]);
}

console.warn('In mod similar, afiseaza skillurile care incep cu c');

for (i = 0; i < skillsLenght; i++) {
  var skillName = person.skills[i];
  if (skillName[0] === 'c') {
    console.log(skillName);
  }
}

console.warn('Folosind un for afiseaza propozitia: "Numele de familie ale prietenilor mei sunt xxx, xxx , xxx."');

var message = 'Numele de familie ale prietenilor mei sunt: ';

for (i = 0; i < friendsLength; i++) {
  var name = person.friends[i].name;

  if (i !== friendsLength - 1) {
    message += `${name}, `;
  } else {
    message += `${name}.`
  }
}

console.log(message);

console.warn('Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends');

var ageTotal = 0;
for (i = 0; i < friendsLength; i++) {
  ageTotal += person.friends[i].age;
}

console.log(`Varsta totala a prietenilor este: ${ageTotal} de ani`);

console.warn('Folosind un for, afiseaza suma anilor de nastere ai persoanelor.');

var currentYear = new Date().getFullYear();
var totalYears = 0;

for (i = 0; i < friendsLength; i++) {

  var birthYear = currentYear - person.friends[i].age;
  totalYears += birthYear;
}

console.log(`Suma totala a anilor de nastere este ${totalYears}`);

console.warn('Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends. (punctele 14 si 15 2 in 1)');

var ageDiff = 0;

for (i = 0; i < friendsLength; i++) {
  ageDiff = person.age - person.friends[i].age;
  console.log(`Diferenta de varsta dintre ${person.surname} si ${person.friends[i].name} este de ${ageDiff} ani.`)
}

console.warn('Afiseaza fraza prietenii mei sunt xxx yyy, xxx yyy, xxx yyy in ordine inversa a arrayului de prieteni. (Numarand de la length la 0).');

var message = 'Prietenii mei sunt: ';

for (i = friendsLength - 1; i >= 0; i--) {
  var friendName = person.friends[i].name;
  var friendSurname = person.friends[i].surname;

  if (i !== 0) {
    message += `${friendName} ${friendSurname}, `;
  } else {
    message += `${friendName} ${friendSurname}.`;
  }
}

console.log(message);


