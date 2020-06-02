var i;
var testNumber = window.prompt('Introdu numarul: ') || 2;
var upperLimit = window.prompt('Introdu limita: ') || 10;

for (i = 1; i <= upperLimit; i++) {
  console.log(i);
  if (i % testNumber !== 0) {
    continue;
  }
  console.log(`Acest numar este multiplu de ${testNumber}`);
}