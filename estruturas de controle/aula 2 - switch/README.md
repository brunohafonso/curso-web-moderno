# Estruturas de controle aula 2
## switch

Exemplo de uso do switch

```javascript
const imprimirResultado = function(nota) {
    // estrutura do switch
    switch(Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra!');
            break; // sem o break o switch vai executar os demais cases
        case 8: case 7:
            console.log('Aprovado!');
            break;
        case 6: case 5: case 4:
            console.log('Recuperação!');
            break;
        case 3: case 2: case 1: case 0:
            console.log('Reprovado!');
            break;
        default:
            console.log('Nota Invalida!');
    }
}

imprimirResultado(10); // Quadro de Honra!
imprimirResultado(5); // Recuperação!
imprimirResultado(6.7); // Recuperação!
imprimirResultado(20); // Nota Invalida!
imprimirResultado(3); // Reprovado!]
```