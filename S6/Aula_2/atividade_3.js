function processarPedido(valor, callback){
  if (valor > 300) {
    //valor = valor - 50;
    valor -= 50;
  }

  return callback(valor);
}

function gerarResumo(valor) {
  return `O valor final do pedido é R$ ${valor.toFixed(2)}`;
}

console.log(processarPedido(299, gerarResumo));
console.log(processarPedido(300, gerarResumo));
console.log(processarPedido(301, gerarResumo));