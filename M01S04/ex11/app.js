var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: {
    html: true,
    css: true,
    javaScript: false
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 30
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29
    }
  }
};

console.warn('Folosind Object.keys() pe proprietatea skills, afiseaza abilitatile persoanei daca acestea sunt true.');
var message = '';

Object.keys(person.skills).forEach(function (skillName) {
  if (person.skills[skillName] === true) {
    message += `${skillName} `;
  }
});

console.log(message.trim());

console.warn('Prin aceeasi metoda, afiseaza o lista inversata cu numele complet al prietenilo');
message = '';

var friendsKeysNames = Object.keys(person.friends);
friendsKeysNames.reverse();

friendsKeysNames.forEach(function (friendKey, i, friends) {
  var friend = person.friends[friendKey];
  var punctuation = ', ';

  message += `${friend.name} ${friend.surname}`;

  if (i === friends.length - 1) {
    punctuation = '.';
  }
  
  message += punctuation;
});

console.log(message);

console.warn('Afiseaza propozitia: “Prietenii mei sunt Larry Steven si Carol.” folosind Object.keys()');

friendsKeysNames = Object.keys(person.friends);
message = 'Prietenii mei sunt ';
friendsKeysNames.forEach(function (friendKey, i, friends) {
  var friendsLenghth = friends.length;
  var friend = person.friends[friendKey];
  var separator = ', ';

  message += friend.name;

  if (i === friendsLenghth - 1) {
    separator = '.';
  }

  if (i === friendsLenghth - 2) {
    separator = " si ";
  }

  message += separator;
});

console.log(message);

console.warn('Folosind bucla, afiseaza mai multe propozitii (cate una per console.log()) care sa afiseze: “Larry este mai mare|mic decat Dragos.” etc…');
friendsKeysNames = Object.keys(person.friends);

friendsKeysNames.forEach(function (friendKey) {
  var friend = person.friends[friendKey];
  var message = '';

  if (person.age - friend.age > 0) {
    message = `${friend.name} este mai mic decat ${person.name}.`;
  } else if (person.age - friend.age < 0) {
    message = `${friend.name} este mai mare decat ${person.name}.`;
  } else {
    message = `${friend.name} si ${person.name} au aceeasi varsta.`;
  }

  console.log(message);
});

console.warn('Folosind Object.keys() pe proprietatea skills, afiseaza abilitatile persoanei.');

Object.keys(person.skills).forEach(function (skillName, i, skills) {
  console.log(skillName.toLowerCase());
});

console.warn('Prin aceeasi metoda, afiseaza o lista cu numele complet al prietenilor. ');

Object.keys(person.friends).forEach (function (friendKey) {
  var friend = person.friends[friendKey];

  console.log(`${friend.name} ${friend.surname}.`);
});





