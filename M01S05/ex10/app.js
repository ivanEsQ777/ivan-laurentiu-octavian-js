function calculateSurface(L, l) {
  if (arguments.length === 2) {
    return L * l;
  } else {
    return L ** 2;
  }
}

console.log(`Patrat de 2 pe 2: ${calculateSurface(2)}`);
console.log(`Dreptunghi de 6 pe 7: ${calculateSurface(6, 7)}`);