const prompt = require('prompt-sync')();

let ini = prompt('Digite numero inicial: ');
let final = prompt('Digite numero final: ');
let passo = prompt('Digite o passo: ');

if (ini === '' || final === '' || passo === '') {
    console.log('Faltou campo')
} else {
    ini = Number(ini);
    final = Number(final);
    passo = Number(passo);

    for (var i = ini; i <= final; i = i + passo) {
        console.log(i)
    }
}

//     ini = Number(ini);
