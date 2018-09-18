# funções - aula 12
## tipos de declaração

```javascript
console.log(soma(10, 5)); // imprime 15
console.log(sub(10, 5)); // gera erro

// forma tradicional de declarar uma função
function soma(x, y) {
    return x + y;
}

// function expression
const sub = function(x, y) {
    return x - y;
}

// named function expression
const multi = function mult(x, y) {
    return x * y;
}
```

Existem diferenças entre a primeira, a segunda e terceira forma a difereça é que ao carregar um arquivo todas as funções declaradas usando a palavra reservada function (primeira sintaxe) são carregadas e podem ser chamadas em qualquer parte do documento ja a segunda e a terceira forma, por se tratar da inicialização de uma variavel a mesma só pode ser chamada abaixo da sua inicialização.
