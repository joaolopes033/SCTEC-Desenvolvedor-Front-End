function calcularTotalCompra(valor, frete = 20) {
  return valor + frete;
}

console.log(calcularTotalCompra(200));
console.log(calcularTotalCompra(350, 15));
console.log(calcularTotalCompra(400, 0));