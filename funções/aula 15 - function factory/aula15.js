// factory são funções que retornam objetos
// factory simples

function createPessoa(nome, sobrenome) {
    return {
        nome: nome,
        sobrenome: sobrenome
    }
}

const pedro = createPessoa('pedro', 'ribeiro');
console.log(pedro);

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('pasta de dente', 5.99));
console.log(criarProduto('notebook', 599.99));

// Comparativo com classe

// Estrutura de uma classe com construtor para fazer o comparativo com o factory
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('Bruno');
p1.falar();

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Pedro');
p2.falar();



