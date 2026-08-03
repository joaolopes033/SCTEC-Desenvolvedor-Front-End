/* 

Atividade

Crie um programa em JavaScript que receba o e-mail abaixo:

joao.silva@gmail.com

Utilizando apenas o método split(), exiba somente o nome do provedor do e-mail.

Saída esperada
gmail 

*/

var email = 'joao.silva@gmail.com';
var parte1 = email.split('@')[1];
var parte2 = parte1.split('.')[0];

console.log(parte2);