const arrayExemplo = [1,2,3,4,5];

arrayExemplo.forEach((item) => {
  console.log(item * 2); //exibe no console o dobro de cada item
});

const x = arrayExemplo.forEach((item) => {
  return item * 2;
});

console.log(x); //irá retornar undefined pois o método forEach não retorna valor
