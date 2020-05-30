var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: [
    'html', 
    'css',
    'sass',
    'bootstrap',
    'npm',
    'git',
    'vscode',
    'javascript'
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
      Age: 29
    }
  ]
};

console.warn('Afiseaza propozitia: “Ma numesc xxx yyy si stiu html si css.” Foloseste notatia cu paranteze patrate');
console.log('Ma numesc ' + person.name + ' ' + person.surname + ' si stiu ' + person['skills'][0] + ', ' + person['skills'][1] + ' si ' + person['skills'][3] + '.');

console.warn('Afiseaza propozitia “Sunt xxx si acum invat JavaScript.” Nu folosi valoarea din arrayul de skills.');
console.log('Sunt ' + person['name'] + ' si acum invat JavaScript.');

console.warn('Afiseaza propozitia “Am x prieteni: Larry, Steve si Carol.” Foloseste proprietatea length si apeleaza direct proprietatile name ale obiectelor.');
console.log(
  'Am ' + person.friends.length + ' prieteni: ' + 
  person.friends[0].name + ', ' + 
  person.friends[1].name + ' si ' + 
  person.friends[2].name + '.'
);

console.warn('Afiseaza propozitia: “Ma numesc xxx yyy si vreau sa invat javascript.” Foloseste notatia cu paranteze patrate.');
console.log(`Ma numesc ${person.name} ${person.surname} si vreau sa invat ${person.skills[7]}.`);
console.log(`Ma numesc ${person.name + ' ' + person.surname} si vreau sa invat ${person.skills[person.skills.length - 1]}.`);

console.warn(`Afiseaza propozitia “Sunt xxx si stiu HTML si CSS.”. Nu folosi valoarea din arrayul de skills.`);
console.log(`Sunt ${person.name} si stiu html si css.`);

console.warn(`Afiseaza propozitia “Am x prieteni: Larryson, Stevenson si Carolson.”. Foloseste proprietatea length si apeleaza direct proprietatile name ale obiectelor.`);
console.log(`Am ${person.friends.length} prieteni: ${person.friends[0].surname}, ${person.friends[1].surname} si ${person.friends[2].surname}.`);

console.warn(`Afiseaza propozitia “Numele meu este xxx yyy, am zz ani si n prieteni.”. Foloseste metoda length pentru a calcula lungimea arrayului de prieteni.`);
console.log(`Numele meu este ${person.name} ${person.surname}, am ${person.age} de ani si ${person.friends.length} prieteni.`);