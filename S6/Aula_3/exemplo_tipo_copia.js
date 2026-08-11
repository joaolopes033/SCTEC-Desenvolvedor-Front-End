//Exemplo de cópia de objetos e arrays em JavaScript

let objetoOriginal = { valor: 'testeB' };

//let objetoCopia = objetoOriginal; //Cópia por referencia
let objetoCopia = { ...objetoOriginal }; //atribuição via spread (...)
// let objetoCopia = structuredClone(objetoOriginal);

objetoCopia.valor = 123;

console.log('objetoOriginal:', objetoOriginal);
console.log('objetoCopia:', objetoCopia);

/* ******************************* */

let arrayOriginal = ['texto1', 'texto2', 'texto3', 'texto4'];

//let arrayCopia = arrayOriginal; //Copia por referencia
//let arrayCopia = [ ...arrayOriginal ];
let arrayCopia = structuredClone(arrayOriginal);

arrayCopia[0] = 'Teste';

console.log('arrayOriginal:', arrayOriginal);
console.log('arrayCopia:', arrayCopia);
