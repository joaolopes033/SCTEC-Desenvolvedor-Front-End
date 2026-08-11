let pessoa = {
  nome: 'Eduardo',
  idade: 30,
  altura: 182,
  endereco: 'Rua ABC'
};


let { nome: novoNome, idade: novaIdade, altura: novaAltura, endereco: novoEndereco } = pessoa;

console.log('obj pessoa:', pessoa);
console.log('nome:', novoNome);
console.log('idade:', novaIdade);
console.log('altura:', novaAltura);
console.log('endereco:', novoEndereco);