# Estruturas de controle aula 4
## do while

```javascript
const getInteiroAleatorioEntre = (min, max) => Math.floor(Math.random() * (max - min) + min);

let opcao = 0;

// Estrutura do do while

do {
    opcao = getInteiroAleatorioEntre(0, 10);
    console.log(`O número gerado foi ${opcao}`);
} while(opcao != 0);
```

Obs: o do while é usado quando queremos que um bloco de instruções seja executado pelo menos 1 vez.
