# funções - aula 14
## closures

Closure é o escopo criado quando se declara uma função, esse escopo permite a função acessar e manipular variaveis externas a função

Contexto léxico em ação

```javascript
const x = "Global";

function fora() {
    const x = "local";
    function dentro() {
        return x;
    }
    return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao()); // imprime local
```