var dragos = {
  name: 'Dragos',
  surname: 'Iordache',
  friends: {}
};

var carol = {
  name: 'Carol',
  surname: 'Carolson',
  friends: {}
};

var andra = {
  name: 'Andra',
  surname: 'Andrason',
  friends: {}
};

var steven = {
  name: 'Steven',
  surname: 'Stevenson',
  friends: {}
};

var larry = {
  name: 'Larry',
  surname: 'Larryson',
  friends: {}
};

dragos.friends.larry = larry;
dragos.friends.steven = steven;
dragos.friends.andra = andra;

larry.friends.dragos = dragos;
steven.friends.dragos = dragos;
andra.friends.dragos = dragos;

larry.friends.steven = steven;
steven.friends.larry = larry;

larry.friends.andra = andra;
andra.friends.larry = larry;

andra.friends.carol = carol;
carol.friends.andra = andra;

delete dragos.friends.larry;
delete larry.friends.dragos;

console.warn('Afiseaza numele complet al lui Dragos folosind obiectul Larry.');
console.log(larry.friends.steven.friends.dragos.name + ' ' + larry.friends.steven.friends.dragos.surname);

console.warn('Afiseaza numele complet a lui Larry folosind obiectul Dragos.');
console.log(dragos.friends.andra.friends.larry.name + ' ' + dragos.friends.andra.friends.larry.surname);

console.warn('Folosind obiectul Carol afiseaza numele complet al lui Dragos. ');
console.log(carol.friends.andra.friends.dragos.name + ' ' + carol.friends.andra.friends.dragos.surname);

console.warn('Folosind obiectul Anita afiseaza numarul total de caractere al numelui complet al lui Dragos.');
console.log(andra.friends.dragos.name.length + andra.friends.dragos.surname.length);
console.log((andra.friends.dragos.name + andra.friends.dragos.surname).length);