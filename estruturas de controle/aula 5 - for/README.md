# Estruturas de controle aula 5
## for

Estrutura semelhante ao for reproduzida com while

```javascript
let contador = 1

while(contador <= 10) {
    console.log(`contador = ${contador}`);
    contador++;
}

// Estrutura for
for(let i = 1; i <= 10; i++) {
    console.log(`contador = ${i}`);
}

const notas = [6.7, 7.5, 8, 9, 10];

for(let i = 0; i < notas.length; i++) {
    console.log(`nota: ${notas[i]}`);
}
```

Obs: usamos o let para evitar comportamentos inesperados