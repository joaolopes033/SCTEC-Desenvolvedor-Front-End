const arrayNumber = [1, 2, 3, 4, 5];

//every(): verifica se TODOS os elementos de um array satisfazem uma condição específica
const todosPares = arrayNumber.every((item) => item % 2 == 0);
//Nesse caso, o every vai verificar se TODOS os itens do nosso array são pares

console.log(todosPares); //Como o arrayNumber não possui apenas números pares, o retorno é false

//some(): verifica se ALGUM dos elementos de um array satisfaz uma condição específica
const possuiPares = arrayNumber.some((item) => item % 2 == 0);
//Nesse caso, o some vai verificar se há algum item par no nosso array

console.log(possuiPares); //Como o arrayNumber possui ao menos um número par, o retorno é true


