let calculateRectalngleArea= (L, l) => {
  return L * l;
}

console.warn('Calculeaza suprafata de tapet necesara pentru o camera de 12 pe 9 m cu tavan inalt de 2.5m, stiind ca exista o usa de 3 pe 2 si o suprafata de ferestre de 3 pe 2.');

let doorSurface = calculateRectalngleArea(3, 2);
let windowSurface = calculateRectalngleArea(3, 2);
let lengthWallSurface = calculateRectalngleArea(12, 2.5);
let widthWallSurface = calculateRectalngleArea(9, 2.5);
let totalWallSurface = 2 * (lengthWallSurface + widthWallSurface);
let wallpaperSurface = totalWallSurface - doorSurface - windowSurface;

console.log(`Suprafata de tepet necesara este de ${wallpaperSurface} m patrati.`);

console.warn('Creaza o functie wrapper pentru calculateRectangleArea() care sa primeasca 4 parametrii: latimea si lungimea unui dreptunghi initial, apoi latimea si lungimea altui dreptunghi. Functia se va numi aggregateSurfaceArea().');

let aggregateSurfaceArea = (L, l, L2, l2) => {
  let firstRectangleArea = calculateRectalngleArea(L, l);
  let secondRectangleArea = calculateRectalngleArea(L2, l2);
  let totalSquareSurface = firstRectangleArea + secondRectangleArea;
  return totalSquareSurface;
}

console.warn('Folosind aceasta noua functie calculeaza suprafata totala a doua dreptunghiuri de 48 pe 92 si 51 pe 102. ');

console.log(aggregateSurfaceArea(48, 92, 51, 102));