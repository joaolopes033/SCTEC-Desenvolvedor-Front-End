function fatorial(n) {
 
  if (n == 1) { 
    return 1;
  }

  return n * fatorial(n - 1); //função que chama ela própria e alterando o valor da sua entrada
}

console.log('O fatorial de 1 é:', fatorial(1));
console.log('O fatorial de 2 é:', fatorial(2));
console.log('O fatorial de 3 é:', fatorial(3));
console.log('O fatorial de 5 é:', fatorial(5));


