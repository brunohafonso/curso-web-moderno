# Estruturas de controle aula 6
## for in

```javascript
const notas = [6.7, 7.5, 8, 9, 10];

// Estrutura do for in

for(let i in notas) {
    console.log(i, notas[i]);
}

const pessoa = {
    nome: 'ana',
    sobrenome: 'silva',
    idade: 56,
    peso: 70
}

for(let atributo in pessoa) {
    console.log(`${atributo} - ${pessoa[atributo]}`);
}
```
Obs: usamos o let para impedir que a variavel seja acessada ao final do loop.