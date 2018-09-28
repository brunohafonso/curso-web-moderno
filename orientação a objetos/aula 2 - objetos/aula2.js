// instanciado um objeto
const produto = new Object();

// adicionando atributos de forma dinamica
produto.nome = 'notebook';
produto['valor'] = 5000;
produto['marca do produto'] = 'sem marca';
console.log(produto);

// removendo atributos
delete produto['marca do produto'];
console.log(produto);

// criando um objeto de forma literal
const carro = {
    modelo: 'A4',
    valor: 890000,
    proprietario: {
        nome: 'joão',
        idade: 24,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [
        {
            nome: 'Junior',
            idade: 19
        },
        {
            nome: 'Ana',
            idade: 42
        }
    ],
    calcularValorSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Rua do bobos';

console.log(carro);

// Formas de criação de objetos
// forma literal de criação de objetos
const obj = {};

// Object
const obj2 = new Object


// funções construtoras
function Produto(nome, preco, desc) {
    // atributo publico
    this.nome = nome;
    /* 
    * preco e desc estão encapsulados e 
    * acessiveis apenas pelos metodos deste objeto 
    */
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
    }
}

const p1 = new Produto('Caneta', 7.99, 0.5);
console.log(p1.getPrecoComDesconto().toFixed(2)); // 4

// função factory (padrão de projeto)
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

const f1 = criarFuncionario('João', 15000, 0);
const f2 = criarFuncionario('Pedro', 15000, 15);
console.log(f1.getSalario()); // 15000
console.log(f2.getSalario()); // 7500

// Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha); // { nome: 'Ana' }

// JSON.parse
const fromJSON = JSON.parse('{"info": "Sou um JSON" }');
console.log(fromJSON); // { info: 'Sou um JSON' }