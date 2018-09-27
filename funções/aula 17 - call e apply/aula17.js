// formas de se chamar uma função

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco()); // imprime R$ 3900.65


// Uso do call
const carro = {preco: 49990, desc: 0.20}
console.log(getPreco.call(carro, 0.17, '$'));

// Uso do apply
console.log(getPreco.apply(carro, [0.17, '$']));

// A unica diferença entre eles seria apenas a forma da passagem dos parametros
// no call você passa os parametros diretamente
// no apply voce tem que passar os parametros em forma de array