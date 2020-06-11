let globalVariable = 'Ma aflu in contextul global';

if (true) {
  let localVariable = 'Ma aflu in contextul local';
  let globalVariable = 'Nu ma aflu in contextul global';

  console.log(globalVariable);
  console.log(localVariable);
}

// console.log(localVariable);
console.log(globalVariable);