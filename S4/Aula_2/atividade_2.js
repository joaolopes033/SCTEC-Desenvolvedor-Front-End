const nomes = ['Joao', 'Ana', 'Joana', 'Thais'];

let criarListaDeObjetos = function (nomesArray) {
    let objetos = [];

    for (let i = 0; i < nomesArray.length; i++) {
        objetos.push({
            id: i + 1,
            nome: nomesArray[i]
        });
    }

    return objetos;
};

let listaDeObjetos = criarListaDeObjetos(nomes);
console.log(listaDeObjetos);