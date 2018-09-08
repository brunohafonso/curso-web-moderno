// Nova sintaxe do ecma2015
// Armazenando numa variavel
const imprimirSoma = function(a, b) {
    console.log(a + b);
}

imprimirSoma(9, 7);
// imprime 15

// Armazenando numa variavel mas na sintaxe de arrow fuction
const soma = (a, b) => {
    return a + b;
}

console.log(soma(78, 90));
// Imprime 168

// Armazenando numa variavel mas na sintaxe de arrow fuction com retorno implicito
const subtracao = (a, b) => a - b;

console.log(subtracao(10, 5));
// Imprime 5

