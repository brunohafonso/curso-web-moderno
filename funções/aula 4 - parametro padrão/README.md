# funções - aula 4
## parametros padrões

Primeira forma de setar valores padrões, mas que tem alguns problemas

```javascript
function soma(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}

console.log(soma()); // imprime 3
console.log(soma(3)); // imprime 5
console.log(soma(1, 2, 3)); // imprime 6
console.log(soma(0, 0, 0)); // imprime 3, que é o valor errado, pois 0 é considerado como falso em js.
```

Segunda forma de definir valor padrões em uma função

```javascript
function soma2(a, b, c) {
    a = a !== undefined ? a : 1;
    b = b !== undefined ? b : 1;
    c = c !== undefined ? c : 1;
    return a + b + c;
}

console.log(soma2()); // imprime 3
console.log(soma2(3)); // imprime 5
console.log(soma2(1, 2, 3)); // imprime 6
console.log(soma2(0, 0, 0)); // imprime 0
```

Terceira forma de definir valor padrões em uma função

```javascript
function soma3(a, b, c) {
    a = 0 in arguments ? a : 1;
    b = 1 in arguments ? b : 1;
    c = 2 in arguments ? c : 1;
    return a + b + c;
}

console.log(soma3()); // imprime 3
console.log(soma3(3)); // imprime 5
console.log(soma3(1, 2, 3)); // imprime 6
console.log(soma3(0, 0, 0)); // imprime 0
```

Quarta forma de definir valor padrões em uma função

```javascript
function soma4(a, b, c) {
    a = isNaN(a) ? 1 : a;
    b = isNaN(b) ? 1 : b;
    c = isNaN(c) ? 1 : c;
    return a + b + c;
}

// Obs: essa é a forma mais segura por valida se o tipo de parametro é number

console.log(soma4()); // imprime 3
console.log(soma4(3)); // imprime 5
console.log(soma4(1, 2, 3)); // imprime 6
console.log(soma4(0, 0, 0)); // imprime 0
```

Ultima forma e mais simples, introduzida no es2015

```javascript
function soma5(a = 1, b = 1, c = 1) {
    return a + b + c;
}

console.log(soma5()); // imprime 3
console.log(soma5(3)); // imprime 5
console.log(soma5(1, 2, 3)); // imprime 6
console.log(soma5(0, 0, 0)); // imprime 0
```