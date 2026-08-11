const filmes = [
  {
    titulo: "Interestelar",
    genero: "Ficção",
    nota: 9.5,
    disponivel: true
  },
  {
    titulo: "Toy Story",
    genero: "Animação",
    nota: 8.7,
    disponivel: true
  },
  {
    titulo: "Velozes e Furiosos",
    genero: "Ação",
    nota: 7.2,
    disponivel: false
  },
  {
    titulo: "O Poderoso Chefão",
    genero: "Drama",
    nota: 9.8,
    disponivel: true
  },
  {
    titulo: "Divertida Mente",
    genero: "Animação",
    nota: 8.9,
    disponivel: false
  }
];

let resultado = filmes.filter(filme => filme.genero == 'Animação');

console.log(resultado);