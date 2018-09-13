# Estruturas de controle aula 3
## while

```javascript
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 1;

// Estrutura do while
while (opcao != 0) {
    opcao = getInteiroAleatorioEntre(0, 10);
    console.log(`O número gerado foi ${opcao}`);
}

console.log('Programa finalizado');
```

Obs: a estrutura while é utilizada quando não sabemos quantas vezes um determinado bloco de instruções será executada.