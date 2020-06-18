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

/*function pluralize (count, words) {
  if (count > 1) {
    return words.plural || '';
  } else {
    return words.singular || '';
  }
} **/

//${pluralize(ageDiff, {singular: 'an', plural: 'ani'})}

let friendsLength = person.friends.length;

for (let i = 0; i < friendsLength; i++) {
  for (let j = 0; j < friendsLength; j++) {
    if (i != j) {
      let word = '';
      let AgeDiff = Math.abs(person.friends[i].age - person.friends[j].age);

      if (AgeDiff === 1) {
        word = ' an.';
      } else if (AgeDiff > 1) {
        word = ' ani.'
      }

      console.log(`Intre ${person.friends[i].name} si ${person.friends[j].name} este o diferenta de ${AgeDiff}${word}`);
    }
  }
}