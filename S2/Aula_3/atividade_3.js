const prompt = require('prompt-sync')();

const numerogerado = Math.floor(Math.random() * 100) + 1;

let numerouser = Number(prompt('Tente adivinhar o número: '));

while (numerouser !== numerogerado) {

    console.log(numerouser < numerogerado ? 'Maior' : 'Menor');

    numerouser = Number(prompt('Tente novamente: '));
}

console.log(`Parabéns! Você acertou. O número era ${numerogerado}.`);