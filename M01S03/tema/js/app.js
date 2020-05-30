var person = {
  firstName: 'Ivan',
  lastName: 'Laurentiu',
  email: 'laur223@gmail.com',
  birthYear: '1993',
  zipCode: '031592',
  pets: [
    {
      name: 'Goldie',
      species: 'pisica',
      age: '2'
    },
    {
      name: 'Mitzi',
      species: 'pisica',
      age: '8'
    },
    {
      name: 'Coockie',
      species: 'papagal',
      age: '10'
    }
  ]   
};

console.warn(`Afiseaza propozitia: “Numele meu este: xxx si yyy si am x animale”. Nu uita de proprietatea length a arrayului pets. `);
console.log(`Numele meu este: ${person.firstName} ${person.lastName} si am ${person.pets.length} animale.`);

console.warn(`Afiseaza propozitia: “Am acelasi email din copilarie: xxx”.`);
console.log(`Am acelasi email din copilarie: ${person.email}`);

console.warn(`Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”`)
console.log(`Unul dintre cele ${person.pets.length} animale ale mele este ${person.pets[1].species} si are ${person.pets[1].age} ani`);

console.warn(`Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2. `);
console.log(new Date().getFullYear() - person.pets[2].age);

console.warn(`Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0. Foloseste anul curent. `);

var difference = (new Date().getFullYear() - person.pets[0].age) - person.birthYear;
var petName = person.pets[0].name;

console.warn(`Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani”.`);
console.log(`Intre ${person.firstName} si ${petName} este o diferenta de ${difference} ani`);

console.warn(`Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa” (folosind bracket notation pe arrayul pets)
`);
var messageElement01 = document.getElementById('prop01');
var message = '';
message = `${person.firstName}, ${person.pets[0].name}, ${person.pets[1].name} si ${person.pets[2].name} locuiesc toti in aceeasi casa.`;
messageElement01.innerText = message;
console.log(message);

console.warn(`Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2`);
var message02Element02 = document.getElementById('prop02');
var message02 = '';
var ageDifference = person.pets[2].age - person.pets[0].age;
message02 = `Diferenta de varta dintre ${person.pets[0].name} si ${person.pets[2].name} este de ${ageDifference} ani.`;
message02Element02.innerText = message02;
console.log(message02);

console.warn(`Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este: zipCode”`);
var message03Element03 = document.getElementById('prop03');
var message03 = '';
message03 = `Ma numesc ${person.name} ${person.surname}, m-am nascut in anul ${person.birthYear} si codul meu postal este ${person.zipCode}`;
message03Element03.innerText = message03;
console.log(message03);

console.warn(`Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.” Foloseste anul curent pentru a efectua scaderea. `);
var message04Element04 = document.getElementById('prop04');
var message04 = '';
var petBirth00 = new Date().getFullYear() - person.pets[0].age;
var petBirth01 = new Date().getFullYear() - person.pets[1].age;
var petBirth02 = new Date().getFullYear() - person.pets[2].age;
message04 = `Animalele mele s-au nascut in ${petBirth00}, ${petBirth01}, respectiv ${petBirth02}.`;
message04Element04.innerText = message04;
console.log(message04);




