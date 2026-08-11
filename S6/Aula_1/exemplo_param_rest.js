function multiplicar(mult, ...param) {
  return param.map((x) => mult * x);
}

console.log(multiplicar(2, 2, 4, 5, 5));
console.log(multiplicar(3, 3));
console.log(multiplicar(5, 5, 8));