# fundamentos javascript aula 19
## declarando variaveis com let

Declarando as variaveis usando let, as mesmas tem o escopo de bloco, ou seja, ela só fica visivel dentro do bloco em que foi declarado

```javascript
let numero = 1;
{
    let numero = 2;
    console.log("dentro =", numero);
    // imprime dentro = 2
}
console.log("fora =", numero);
// imprime fora = 1
```

Comparação de loops de repatição usando o var e o let

Exemplo com var

```javascript
for(var i = 0; i <=3; i++) {
    console.log(i);
    /*
    * imprime
    * 0
    * 1
    * 2
    * 3
    */
}

console.log("i =", i);
// imprime i = 4
```

Exemplo com let

```javascript
for(let i = 0; i <= 3; i++) {
    console.log(i);
    /*
    * imprime
    * 0
    * 1
    * 2
    * 3
    */
}

console.log("i =", i);
// retorna o erro i is not defined
```

Mais um exemplo

Exemplo com var

```javascript
const funcs = [];

for(var j = 0; j <= 3; j++) {
    funcs.push(() => { console.log(j); });
}

funcs[2]();
// imprime 4
funcs[1]();
// imprime 4
```

Obs: nesse exemplo a chamada das duas funções adicionadas no array tem a mesma saída pelo fato do var não ter escopo de bloco

Exemplo com let

```javascript
const funcs = [];

for(let j = 0; j <= 3; j++) {
    funcs.push(() => { console.log(j); });
}

funcs[2]();
// imprime 2
funcs[1]();
// imprime 1
```

Obs: nesse exemplo a chamada das duas funções adicionadas no array tem saídas pelo fato do let ter escopo de bloco
