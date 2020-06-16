let person = {
  getName: () => {
    return 'Crispin Glover';
  },
  getAge: () => {
    return 50;
  }
};

let accessor = (methodSuffix) => {
  let methodName = `get${methodSuffix}`;
  return person[methodName]();
};

console.log(accessor('Name'));

console.warn('Folosind accesorul salveaza numele mic al persoanei intr-o variabila si foloseste-l in propoztia: “Eu sunt xxx.”');

let personName = accessor('Name').split(' ')[0];
console.log(`Eu sunt ${personName}`);

console.warn('Afiseaza diferenta de varsta dintre tine si persoana.');

console.log(Math.abs(27 - accessor('Age')));

console.warn('Afiseaza anul de nastere al persoanei folosind anul curent.');

let currentYear = new Date().getFullYear();
console.log(currentYear - accessor('Age'));

console.warn('Afiseaza propozitia “Ma numesc xxx si am yy ani si m-am nascut acum aa ani.”');

console.log(`Ma numesc ${accessor('Name')} si m-am nascut acum ${accessor('Age')} de ani.`);