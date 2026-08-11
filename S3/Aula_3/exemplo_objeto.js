let livro = {
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes"
};

console.log(typeof(livro));
console.log(livro);

livro.anoPublicao = 1960;

console.log(livro);

console.log(livro.autor);

livro.anoPublicacao = 1605;

console.log(livro);

for (let propriedade in livro) {
  console.log(propriedade);
}