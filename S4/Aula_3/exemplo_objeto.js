let filme = {
  titulo: '',
  dataLancamento: '',
  estudio: '',
  diretor: '',
  atores: [
    'ator1',
    'ator2'
  ],
};

filme.genero = '';

console.log('Obj Filme: ', filme);
console.log('Typo Obj Filme: ', typeof(filme));

let pessoa = {
  nome: 'Nome Pessoa',
  dataNascimento: '',
  //...
  endereco: {
    rua: '',
    numero: 0,
    cep: ''
  },
  dizerOla: function(valor) {
    console.log('Olá');
  },
  dizerNome: function() {
    console.log(this.nome)
  },
}

//metodo dizerOla do objeto pessoa 
pessoa.dizerOla();
pessoa.dizerNome();

// console.log('Obj Pessoa: ', pessoa);

// delete pessoa.endereco;

// console.log('Obj Pessoa: ', pessoa);

// let celular = new Object();

// celular.modelo = '';
// celular['fabricante'] = '';

// console.log('Obj Celular: ', celular);

// //delete celular.fabricante;
// delete celular['fabricante'];

// console.log('Obj Celular: ', celular);
