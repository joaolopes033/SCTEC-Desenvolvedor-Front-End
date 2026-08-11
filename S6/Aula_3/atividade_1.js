function somarNumeros(num) {
  
  if (num == 1) return num;

  return num + somarNumeros(num - 1); //Recursividade alterando o parametro de entrada
}

const n = 4;
console.log(`Soma dos números de 1 a ${n}: ${somarNumeros(n)}`);
