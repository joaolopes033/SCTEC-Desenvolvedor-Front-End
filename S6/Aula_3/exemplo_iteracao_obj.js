let pessoa = {
  nome: 'Eduardo',
  idade: 30,
  altura: 182,
  endereco: 'Rua ABC'
};

console.log('For...In');
for (let propriedade in pessoa) {
  console.log(propriedade);
}

console.log('\nObject.keys()');
Object.keys(pessoa).forEach(propriedade => {
  console.log(propriedade);
});

// for(let valor of pessoa) { //Esta estrutura não funciona para iteração em objetos. Apenas arrays
//   console.log(valor);
// }

console.log('\nObject.values()');
Object.values(pessoa).forEach(propriedade => {
  console.log(propriedade);
});