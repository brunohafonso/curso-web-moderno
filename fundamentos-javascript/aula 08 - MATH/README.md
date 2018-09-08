# fundamentos javascript aula 8
## Objeto Math

Objeto Math tem algumas funções e constantes
como Math.PI que tem o valor de PI 
e Math.pow que serve para o calculo de potenciação e que recebe 2 parametros o valor a ser elevado e o expoente da potenciação

```javascript
const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2);
console.log(area.toFixed(2) + "m²");
// imprime 98.52m²
```