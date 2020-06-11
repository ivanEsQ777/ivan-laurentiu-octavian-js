function calculateRectangleArea (L, l) {
  return L * l;
}

console.warn('Folosind functia calculateRectangleArea() afiseaza suprafata unui dreptunghi de 4 pe 3');
console.log(calculateRectangleArea(4, 3));

console.warn('Afiseaza suprafata totala a unor dreptunghiuri de 5 pe 3, respectiv 3 pe 2. Foloseste variabile.');

let firstSurface = calculateRectangleArea(5, 3);
let secondSurface = calculateRectangleArea(3, 2);

console.log(`Suprafata totala este: ${firstSurface + secondSurface}`);

console.warn('Calculeaza intr-o variabila numita squareSurface aria unui patrat de 3 pe 3.');
let squareSurface = calculateRectangleArea(3, 3);

console.log(squareSurface);

console.warn('Folosind functia calculateRectangleArea() afiseaza suprafata unui dreptunghi de 12 pe 9');
console.log(`Suprafata este ${calculateRectangleArea(12, 9)}`);

console.warn('Afiseaza suprafata totala a trei dreptunghiuri de 15 pe 31,  8 pe 9, respectiv 10 pe 5. Foloseste variabile.');
firstSurface = calculateRectangleArea(15, 31);
secondSurface = calculateRectangleArea(8, 9);
let thirdSurface = calculateRectangleArea(10, 5);
console.log(`Suprafata totala este: ${firstSurface + secondSurface + thirdSurface}`);

console.warn('Calculeaza intr-o variabila numita anotherSquare aria unui patrat de 8 pe 8.');

console.log(`Suprafata patratuluie este: ${calculateRectangleArea(8, 8)}`);
