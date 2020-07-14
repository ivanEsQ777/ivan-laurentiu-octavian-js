// Folosind elementul stage, adauga un event de mouseover care sa afiseze in elementul paragraf mesajul: “Mouseul este pe scena” atunci cand mouseul face hover pe aceasta.
// Folosind mouseout, afiseaza in paragraf mesajul “Mouseul nu este pe scena”. 
// Afiseaza intr-un alt element de cate ori mouseul a fost pe scena.

let p = document.createElement('p');
document.body.prepend(p);

let stageElement = document.querySelector('.stage');


let p2 = document.createElement('p');
p.after(p2);

let countIn = 0;
let countOut = 0;

let createMessage = (countIn, countOut) => {
  return `In: ${countIn}, Out: ${countOut}`;
}

stageElement.addEventListener('mouseover', () => {
  let message = 'mousul este pe scena';
  countIn++;

  p2.innerText = createMessage(countIn, countOut);
  p.innerText = message;
});

stageElement.addEventListener('mouseout', () => {
  let message = 'mousul nu este pe scena';
  countOut++;

  p2.innerText = createMessage(countIn, countOut);
  p.innerText = message;
});



