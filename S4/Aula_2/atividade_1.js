let numeroUser = 18;

function quadrado(numero) {
    if (isNaN(numero)) {
        console.log('Parâmetro incorreto.');
        return;
    } else {
        return numero ** 2;
    }
}

/*
const quadrado = numero => {
    if (isNaN(numero)) {
        console.log('Parâmetro incorreto.');
        return;
    } else {
        return numero ** 2;
    }
}
*/

let resultado = quadrado(numeroUser);

if (typeof resultado !== 'undefined') {
    console.log(`O quadrado do seu número é ${resultado}.`);
}
