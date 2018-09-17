const soma = function(x, y) {
    return x + y;
}

const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b));
}

imprimirResultado(3, 4); // imprime 7
imprimirResultado(3, 4, soma); // imprime 7

imprimirResultado(4, 3, function(x, y) {
    return x - y;
}); // imprime 1

imprimirResultado(10, 5, (x, y) => x * y); // imprime 50

const pessoa = {
    falar: function() {
        console.log('bla bla bla');
    }
}

pessoa.falar();
