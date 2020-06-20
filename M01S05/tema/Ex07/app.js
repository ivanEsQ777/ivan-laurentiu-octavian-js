let dateBuilder = [
  function () {
    return '2020';
  },
  function () {
    return 'Iunine';
  },
  function () {
    return '20';
  }
];

dateBuilder[3] = function () {
  return 'Sambata';
};

console.warn('Folosind arrayul dateBuilder. Afiseaza anul curent.');
console.log(dateBuilder[0]());

console.warn('Afiseaza propozitia: “Suntem in luna an”.');
console.log(`Suntem in ${dateBuilder[1]()} ${dateBuilder[0]()}`);

console.warn(`Afiseaza propozitia: “Astazi este zi, data”.`);
console.log(`Astazi este ${dateBuilder[2]()} ${dateBuilder[1]()}`);

console.warn(`Afiseaza propozitia: “Data curenta este zi luna an”.`);
console.log(`Data curenta este: ${dateBuilder[2]()} ${dateBuilder[1]()} ${dateBuilder[0]()}`);