# funções - aula 13
## contexto lexico

```javascript
const valor = 'Global';

function minhaFuncao() {
    console.log(valor);
}

function exec() {
    const valor = 'Local';
    minhaFuncao();
}

exec(); // imprime Global
``` 


Imprime Global pois recebe o ocntexto léxico de quando foi declarada
