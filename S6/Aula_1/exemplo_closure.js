function criarSomador(numero_funcao) {
  let somador = numero_funcao;

  return function (numero_retorno) {
    return somador + numero_retorno;
  }
}

let teste = criarSomador(10);

console.log('1 Chamada teste:', teste(5));
console.log('2 Chamada teste:', teste(17));
