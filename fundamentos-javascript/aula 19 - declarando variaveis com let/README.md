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