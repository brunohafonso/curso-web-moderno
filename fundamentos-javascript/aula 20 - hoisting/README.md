# fundamentos javascript aula 20
## hoisting

Hoisting é içamento de variaveis, ou seja, declarando uma variavel antes dela ser declarada não gera erro apenas faz com que ela retorna com valor undefined, mas isso só funciona com var

Exemplo com var

```javascript
console.log("a =", a);
// imprime a = undefined
var a = 2;
console.log("a =", a);
// imprime a = 2
```

Exemplo com let

```javascript
console.log("b =", b);
// retorna o erro b is not defined 
let b = 2;
console.log("b =", b);
// imprime a = 2
```