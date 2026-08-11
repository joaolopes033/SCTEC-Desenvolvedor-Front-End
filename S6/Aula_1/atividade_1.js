function adicionaQuadrados(num_a, num_b) {
  //Closure
  function quadrado(num) {
    return num * num;
  }

  return quadrado(num_a) + quadrado(num_b);
}

console.log('Soma dos quadrados:', adicionaQuadrados(2, 3));