var i;

console.warn('Modifica exemplul astfel incat bucla sa numere de la 1 la 89.');

for (i = 1; i <= 89; i++) {
  console.log(i);
}

console.warn('Modifica exemplul astfel incat bucla sa numere de la 1 la 88 .');

for (i = 1; i <= 88; i++) {
  console.log(i);
}

console.warn('Folosind keywordul break opreste bucla atunci cand numarul este egal cu 42.');

for (i = 1; i <= 88; i++) {
  if (i === 42) {
    break;
  }
  console.log(i);
}

console.warn('Folosind keywordul continue, afiseaza doar numele impare intre 1 si 89. ');

for (i = 1; i <= 89; i++) {
  if (i % 2 === 0) {
    continue;
  }
  
  console.log(i);
}

console.warn ('In mod similar, afiseaza doar numerele care sunt divizibile cu 3. ');

for (i = 1; i <= 89; i++) {
  if (i % 3 !== 0) {
    continue;
  }
  
  console.log(i);
}

console.warn('Fizz Buzz');

for (i=1; i <= 100; i++) {

  if (i % 3 === 0) {
    console.log('Fizz');
    continue;
  }

  if (i % 5 === 0) {
    console.log('Buzz');
    continue;
  }
  console.log(i);
}