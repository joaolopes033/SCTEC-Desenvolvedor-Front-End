function criarMultiplicador(fator) {
  return function (num) {
    return num * fator;
  }
}

let dobro = criarMultiplicador(7);

console.log(dobro(1));
console.log(dobro(3));
console.log(dobro(4));
console.log(dobro(7));
console.log(dobro(10));