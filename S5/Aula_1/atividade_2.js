class CarrinhoDeCompras {
    constructor(itens = []) {
        this.itens = itens;
    }

    adicionarItem(nome, preco) {
        this.itens.push({
            nome: nome,
            preco: preco
        });
    }

    listarItens() {
        return this.itens;
    }

    calcularTotal() {
        let total = 0;

        this.itens.forEach(function (item) {
            total = total + item.preco;
        });

        return total;
    }
}

class CarrinhoVip extends CarrinhoDeCompras {

    constructor(itens, desconto) {
        super(itens);
        this.desconto = desconto;
    }

    calcularTotalComDesconto() {
        let total = this.calcularTotal();
        let desconto = total * (this.desconto / 100);

        return total - desconto;
    }
}

let carrinho = new CarrinhoVip([], 10);

carrinho.adicionarItem("Mouse", 50);
carrinho.adicionarItem("Teclado", 100);

console.log("Lista:");
console.log(carrinho.listarItens());

console.log("Total:");
console.log(carrinho.calcularTotal());

console.log("Total com desconto:");
console.log(carrinho.calcularTotalComDesconto());