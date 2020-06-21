function calculateRectangleSurface (L, l, H) {
  let paramNumber = arguments.length;
  switch (paramNumber) {
    case 1:
      return L * L;
    case 2:
      return L * l;
    case 3:
      return L * l * H;
  }
};

console.log(calculateRectangleSurface(2));
console.log(calculateRectangleSurface(2, 3));
console.log(calculateRectangleSurface(2, 2, 3));

let calculateCircleArea = (r) => {
  return Math.PI * Math.pow(r, 2);
}

console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));

let pet = {
  getName: function () {
    return 'Goldy';
  },
  getSpecies: function () {
    return 'pisica';
  },
  getAge: function () {
    return '2';
  }
};

console.log(`${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani.`);

let petAge = pet.getAge();
console.log(`Animalul meu are ${petAge} ani.`);
