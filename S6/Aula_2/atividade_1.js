function exibirBoasVindas(nome = 'Visitante') {
  return 'Boas vindas ' + nome;
}

let msg = exibirBoasVindas();
console.log(msg);
console.log(exibirBoasVindas('Eduardo'));
console.log(exibirBoasVindas(''));
