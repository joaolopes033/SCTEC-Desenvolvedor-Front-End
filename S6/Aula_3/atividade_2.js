const filmes = [
  "Avatar",
  "Vingadores",
  "Interestelar",
  "Barbie",
  "Divertida Mente",
  "Minecraft"
];

//includes
if (filmes.includes('Barbie')) {
  console.log('O filme está disponível');
} else {
  console.log('O filme não está disponível');
}

//indexOf
console.log('O índice do filme Interestelar é:', filmes.indexOf('Interestelar'));

//slice
console.log('3 primeiros filmes:', filmes.slice(0, 3));