let carro = {
    marca: 'Porsche',
    modelo: '911 Turbo S',
    ano: 2026,

    descricao: function () {
        return `Marca: ${this.marca} Modelo: ${this.modelo} Ano: ${this.ano} `;
    }
};

console.log(carro.descricao());