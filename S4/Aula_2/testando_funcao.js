const prompt = require('prompt-sync')();

// função soma
const soma = (a, b) => a + b;

let numero1 = Number(prompt('Digite um numero: '));
let numero2 = Number(prompt('Digite um numero: '));

// if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
if (isNaN(numero1) || isNaN(numero2)) {
    console.log('Aceitamos apenas numeros');
} else {
    let resultado = soma(numero1, numero2);
    console.log(resultado);
}