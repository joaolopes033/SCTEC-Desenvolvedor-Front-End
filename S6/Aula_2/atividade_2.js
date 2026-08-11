function calcularMedia(...notas) {
  let somaNotas = 0;

  //Soma de todos os valores da lista
  notas.forEach((nota) => {
    somaNotas += nota;
  });
  
  return somaNotas / notas.length;
}

let media = calcularMedia(4,6,8,2,5,3,10,8);

console.log('O valor da média da turma é:', media);