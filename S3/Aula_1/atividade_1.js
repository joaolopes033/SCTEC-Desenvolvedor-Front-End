const prompt = require('prompt-sync')();

var valor_1;
var valor_2;
var operacao;
var continuar;

do {
valor_1 = Number(prompt('Digite um numero: '));
valor_2 = Number(prompt('Digite um numero: '));
operacao = prompt('Digite uma operacao: ');
switch (operacao) {
    case '+':
        console.log(`Resultado: ${valor_1 + valor_2}`)
        break;

        case '-':
        console.log(`Resultado: ${valor_1 - valor_2}`)
        break;

        case '*':
        console.log(`Resultado: ${valor_1 * valor_2}`)
        break;

        case '/':
        console.log(`Resultado: ${valor_1 / valor_2}`)
        break;

        default:
        console.log('Operacao invalida')
        break;

}

continuar = prompt('Continuar?: ').toLowerCase();


}while (continuar == 'sim' || continuar == 's');

console.log('Tchau muito obrigado por usar minha calculadora.')