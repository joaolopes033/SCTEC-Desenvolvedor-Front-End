const arrayNumber = [1, 2, 3, 4, 5];

//find(): Retorna o primeiro elemento que satisfaça a condição testada
const par = arrayNumber.find((item) => item % 2 == 0);
//Nesse caso, o find vai buscar o primeiro elemento par do array

console.log(par); //Como resultado, o primeiro par que ele encontra é o 2

const zero = arrayNumber.find((item) => item == 0);
//Nesse caso, o find vai buscar o primeiro elemento com valor 0

console.log(zero); //Como não há 0 no array, o resultado é undefined

//essa validação pode ser utiliza em conjunto com outras estruturas
if (!arrayNumber.find((item) => item == 0)) { //Verifica se NÃO existe o número zero no array
  arrayNumber.push(0); //Caso não exista, inclui através do método push()
}

console.log(arrayNumber); //[ 1, 2, 3, 4, 5, 0 ]