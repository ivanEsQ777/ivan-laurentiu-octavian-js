console.warn('Modifica exemplul astfel incat bucla sa numere de la 1 la 67.');

var i = 0;

while (i <= 67) {
  console.log(i);

  i++;
}

console.warn('Modifica exemplul astfel incat bucla sa numere de la 1 la 66 (dar nu modifica numarul 67).')

var i = 0;

while (i < 67) {
  console.log(i);

  i++;
}

console.warn('Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l).');

var i = 0;

while (i < 67) {
  console.log(i);

  if (i >=12) {
    break;
  }

  i++;
}

console.warn ('Folosind keywordul continue afiseaza doar numerele pare intre 1 si 32 (inclusiv ) (bucla noua). ');

var i = 1;

while (i <= 32) {
  if (i % 2 !== 0) {
    i++;
    continue;
  } else {
    console.log(i);
  }

  i++;
}

