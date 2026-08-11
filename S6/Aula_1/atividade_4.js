function listarParticipantes(...nomes) {
  nomes.forEach(nome => {
    console.log('Nome cadastrado:', nome);
  });
  console.log('Quantidade de nome cadastrados:', nomes.length);
}


listarParticipantes('João', 'Maria', 'José');
listarParticipantes('Maria');