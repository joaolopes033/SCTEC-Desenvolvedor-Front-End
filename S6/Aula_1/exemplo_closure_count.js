function meuContador() {
  let counter = 0;

  return function () {

    counter = counter + 1;
    return counter;
  }
}

let contador = meuContador();

console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());