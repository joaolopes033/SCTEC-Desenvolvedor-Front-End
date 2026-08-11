const prompt = require('prompt-sync')();

let fruta;
let sair;
let sairMinusculo;
let arrayCarrinhoFruta = [];

do {
    fruta = prompt('Digite o nome de uma fruta: ');
    arrayCarrinhoFruta.unshift(fruta);

    if (arrayCarrinhoFruta.length > 5) {
        arrayCarrinhoFruta.pop();
    }

    console.log(arrayCarrinhoFruta);

    sair = prompt('Deseja encerrar a solicitação de novas frutas? Caso queira sair, digite "sair". Caso contrário, digite "nao": ');

    sairMinusculo = sair.toLowerCase();

} while (sairMinusculo === 'nao' || sairMinusculo === 'n');

console.log(`Seu carrinho de fruta tem essas frutas: ${arrayCarrinhoFruta}`);