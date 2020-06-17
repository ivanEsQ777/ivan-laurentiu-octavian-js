console.warn('Stiind ca un camp dreptunghiular de grau produce 32kg/m2  de faina. Afla si afiseaza cate kilograme de paine produce un camp de 300 pe 200 metri stiind ca dintr-un kilogram de faina ies 2.5 kg de paine.');

let calculateRectangleArea = (L, l) => {
  return(L * l);
};

const flourYield = 32;
const breadYield = 2.5;

let fieldSurface = calculateRectangleArea(300, 200);

let totalBread = fieldSurface * flourYield * breadYield;

console.log(`${totalBread} kg de paine`);

console.warn('Dar doua campuri de 150 pe 200 si 500 pe 300 in total?');

let firstFieldSurface = calculateRectangleArea(150, 200)
let secondFieldSurface = calculateRectangleArea(500, 300);

totalBread = (firstFieldSurface + secondFieldSurface) * flourYield * breadYield;

console.log(`${totalBread} kg de paine`);

