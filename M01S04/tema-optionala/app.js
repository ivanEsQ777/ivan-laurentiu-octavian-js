let person = {
  name: 'Ivan',
  surname: 'Laurentiu',
  age: 27,
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
    },
    andra: {
      name: 'Andra',
      surname: 'Andrason',
      age: 35
    }
  }
};


let message = 'Prietenii mei sunt: ';
let friendsKeysNames = Object.keys(person.friends);
friendsKeysNames.forEach(function (friendKey, i, friendsKeys) {
  
  let friend = person.friends[friendKey];
  let separator = ', ';
  let friendsKeysLength = friendsKeys.length;

  if (i === friendsKeysLength - 1) {
    separator = '.';
  }
  if (i === friendsKeysLength - 2) {
    separator = ' si ';
  }

  message += `${friend.name} ${friend.surname}${separator}`;

  if (friendsKeysLength === 0) {
    console.log('Nu am prieteni');
  } 
  if (friendsKeysLength === 1) {
    console.log(`Prietenul meu este: ${friend.name} ${friend.surname}.`);
  }
  if (friendsKeysLength >= 2) {
    console.log(message);
  }
});

