console.warn('Calculeaza suprafata de tapet necesara pentru o camera de 6 pe 4 m cu tavan inalt de 2.5m, stiind ca exista o usa de 2.2 pe 1.5 si o suprafata de ferestre de 2 pe 1.5.');

let calculateRectangleArea = (L, l) => {
  return L * l;
};

let totalWallSurface = 0;
let longWallSurface = calculateRectangleArea(6, 2.5);
let shortWallSurface = calculateRectangleArea(4, 2.5);
let doorSurface = calculateRectangleArea(2.2, 1.5);
let windowSurface = calculateRectangleArea(2, 1.5);

totalWallSurface = 2 * (shortWallSurface + longWallSurface);

console.log(`Suprafata necesara este: ${totalWallSurface - doorSurface - windowSurface}`);

console.warn('Creaza o functie wrapper numita calculateSquareArea() pentru calculateRectangleArea() care sa primeasca ca parametru latura unui patrat si sa calculeze suprafata acestuia. O functie wrapper este o functie care “imbraca” o functie existenta pentru a-i aduce imbunatatiri, extra cod sau pentru a-i limita in mod intentionat capacitatile');

let calculateSquareArea = (l) => {
  let squareSurface = calculateRectangleArea(l, l);

  return squareSurface;
};

console.log(calculateSquareArea(2));