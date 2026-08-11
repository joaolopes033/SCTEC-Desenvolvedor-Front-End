const arrayNumber = [1, 2, 3, 4, 5];

//Cria um novo array contendo apenas os elementos que satisfazem uma determinada condição.
const pares = arrayNumber.filter((item) => item % 2 == 0);
//Nesse caso, o filter irá criar um novo array contendo apenas os números pares

console.log(pares); //[ 2, 4 ]

const impares = arrayNumber.filter((item) => item % 2 != 0);
//Já aqui, o filter irá criar um novo array contendo apenas os números que NÃO SÃO pares, ou seja, impares

console.log(impares); //[ 1, 3, 5 ]

//essa validação pode ser utiliza em conjunto com outras estruturas
if (!arrayNumber.filter((item) => item > 6).length) { //Verifica se há elementos maiores que 6 no arrayNumber
  console.log('Apenas números menores que 6');
}
