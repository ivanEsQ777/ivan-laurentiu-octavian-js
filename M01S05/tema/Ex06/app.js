let person = {
  getName: function() {
    return 'Ivan Laurentiu';
  },
  getAge: function() {
    return 27;
  }
};

function accesor(mthodSuffix) {
  let methodName = 'get' + mthodSuffix;
  return person[methodName]();
}

console.warn('Folosind accesorul afiseaza numele persoanei.');
console.log(accesor('Name'));

console.warn('Afiseaza varsta persoanei.');
console.log(accesor('Age'));

console.warn('Afiseaza anul de nastere al persoanei folosind anul curent.');
currentYear = new Date().getFullYear();
console.log(`${currentYear - accesor('Age')}`);

console.warn('Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!”');
console.log(`Ma numesc ${accesor('Name')} si am ${accesor('Age')} de ani.`);
