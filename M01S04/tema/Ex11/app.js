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

console.warn('Folosind Object.keys() pe proprietatea skills, afiseaza abilitatile persoanei.');

Object.keys(person.skills).forEach(function (skillName) {
  console.log(skillName);
});

console.warn('Prin aceeasi metoda, afiseaza o lista cu numele complet al prietenilor. ');

Object.keys(person.friends).forEach(function (friend) {
  console.log(`${person.friends[friend].name} ${person.friends[friend].surname}`);
});

console.warn('Afiseaza propozitia: “Prietenii mei sunt Larry Larryson, Steven Stevenson si Carol Carolson.” folosind Object.keys()');

let message = 'Prietenii mei sunt ';
let friendsKeysNames = Object.keys(person.friends);

friendsKeysNames.forEach(function (friendKey, i, friendsKeys) {
  separator = ', ';
  let friend = person.friends[friendKey];
  if (i === friendsKeysNames.length - 1) {
    separator = '. ';
  }
  if (i === friendsKeysNames.length - 2) {
    separator = ' si ';
  }
  message += `${friend.name} ${friend.surname}${separator}`;
});

console.log(message.trim());

console.warn('Folosind bucla, afiseaza mai multe propozitii (cate una per console.log()) care sa afiseze: “Larry are xx ani. Steven are …”');

friendsKeysNames.forEach(function (friendKey, i, frindsKeys) {
  friend = person.friends[friendKey];
  console.log(`${friend.name} ${friend.surname} are ${friend.age} de ani.`);
});