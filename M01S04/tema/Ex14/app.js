var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987, 
  pets: [{
    name: 'Twix',
    species: 'papagal',
    age: 4
  }, {
    name: 'Mars',
    species: 'caine',
    age: 2, 
  }, {
    name: 'Bounty',
    species: 'hamster',
    age: 4
  }, {
    name: 'Lion',
    species: 'pisica',
    age: 10
  }]
};

console.warn('Afiseaza in consola folosind metoda forEach() numele fiecarui animal. ');

person.pets.forEach(function (pet, i) {
  console.log(pet.name);
});

console.warn('Folosind o bucla for afiseaza suma anilor animalelor. ');

let totalPetAge = 0;
petsLength = person.pets.length;
for (let i = 0; i < petsLength; i++) {
  petAge = person.pets[i].age;
  totalPetAge += petAge;
}

console.log(totalPetAge);

console.warn('Folosind forEach() afiseaza cate una pe linie propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are… etc”.');

person.pets.forEach(function (pet, i) {
  console.log(`${pet.name} este ${pet.species} si are ${pet.age} ani.`);
})

console.warn('Folosind o bucla for afiseaza cate una pe linie propozitiile: “Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array)');

currentYear = new Date().getFullYear();
personAge  = currentYear - person.birthYear;
for (let i = 0; i < petsLength; i++) {
  ageDiff = Math.abs(personAge - person.pets[i].age);
  console.log(`Intre ${person.firstName} si ${person.pets[i].name} este o diferenta de ${ageDiff} ani`);
}

console.warn('Folosind o bucla for afiseaza in ordine inversa numele animalelor din array. ');
person.pets.reverse();
for (let i = 0; i < petsLength; i++) {
  console.log(person.pets[i].name);
}
person.pets.reverse();

console.warn('La fel si cu forEach()');

person.pets.reverse();
person.pets.forEach(function (pet) {
  console.log(pet.name);
})
person.pets.reverse();

console.warn('Folosind o bucla for afla care este cel mai in varsta animal si afiseaza propozitia: “xxx este cel mai batran animal pe care il am si este cu y ani mai mic decat mine.”');
let highestPetAge = 0;

for (let i = 0; i < petsLength; i++) {

let petAge = person.pets[i].age;
  if (petAge > highestPetAge) {
    highestPetAge = petAge;
  }
}

console.log(`Cel mai batran animal are ${highestPetAge} ani.`);

console.warn('Folosind o bucla forEach afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.');

let message = 'Am ';

for (let i = 0; i < petsLength; i++) {
  let separator = ', ';
  if (i === petsLength - 1) {
    separator = '.';
  }
  if (i === petsLength - 2) {
    separator = ' si ';
  }

  message += `${person.pets[i].species}${separator}`;
}

console.log(message);