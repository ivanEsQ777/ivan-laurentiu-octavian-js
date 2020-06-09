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

console.warn('Folosind obiectul person si forEach, afiseaza skillurile din pozitiile impare ale arrayului.');

var message = '';

person.skills.forEach(function (skill, i) {
  if (i % 2 !== 0) {
    message += skill + ' ';
  }
});

console.log(message.trim());

console.warn(' In mod similar, afiseaza skillurile care contin litera a. ');

var message = '';

person.skills.forEach(function (skill){

  // if (skill.indexOf('a') >= 0 {}
  if (skill.includes('a') === true) {
    message += `${skill} `;
  }
});

console.log(message.trim());

console.warn(' Folosind forEach afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy si xxx yyy."');

var message = 'Prietenii mei se numesc: ';

person.friends.forEach(function(friend, i, friends) {
  var punctuation = ', ';
  var friendsLength = friends.length;

  message += `${friend.name} ${friend.surname}`;

  if (i === friendsLength - 2) {
    punctuation = " si ";
  }

  if (i === friendsLength -1) {
    punctuation = '.';
  }

  message += punctuation;
});

console.log(message);