const prompt = require('prompt-sync')();

var nomeProduto;
var categoriaProduto;
var precoProduto;

var continuarCadastro;

var quantidadeProdutos = 0;
var somaPrecos = 0;
var maiorPreco = 0;
var quantidadeEletronicos = 0;
var nomeProdutoMaisCaro;

do {
    nomeProduto = prompt('Digite o nome do produto: ');
    categoriaProduto = prompt('Digite a categoria do produto: ').toUpperCase();
    precoProduto = Number(prompt('Digite o preco do produto: '));

    console.log(nomeProduto.toUpperCase());

    quantidadeProdutos++;
    somaPrecos += +precoProduto;

    if (precoProduto > maiorPreco) {
        maiorPreco = precoProduto;
        nomeProdutoMaisCaro = nomeProduto;
    }

    switch (categoriaProduto) {
        case 'E':
            console.log('Categoria Eletronico');
            quantidadeEletronicos++;
            break;

        case 'V':
            console.log('Categoria Vestuario');
            break;

        case 'A':
            console.log('Categoria Alimento');
            break;

        default:
            console.log('Categoria invalida');
            break;
    }

    precoProduto <= 50
        ? console.log('Seu produto é barato')
        : precoProduto <= 200
            ? console.log('Se produto é médio')
            : console.log('Seu produto é caro');

    continuarCadastro = prompt('Deseja cadastrar outro produto?').toLowerCase();

} while (continuarCadastro == 'sim' || continuarCadastro == 's');

let media = somaPrecos / quantidadeProdutos;

console.log(`Quantidade de produtos: ${quantidadeProdutos}`);
console.log(`Soma dos preços: ${somaPrecos}`);
console.log(`Média dos preços: ${media.toFixed(2)}`);
console.log(`Produto mais caro: ${nomeProdutoMaisCaro} - R$ ${maiorPreco.toFixed(2)}`);
console.log(`Produtos da categoria Eletrônicos: ${quantidadeEletronicos}`);