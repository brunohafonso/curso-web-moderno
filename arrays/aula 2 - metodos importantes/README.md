# array aula 02
## métodos importantes

```javascript
const pilotos = ['Vetel', 'Massa', 'Alonso', 'Rubinho']
pilotos.pop() // o ultimo elemento do array (Rubinho) será removido
console.log(pilotos) // [ 'Vetel', 'Massa', 'Alonso' ]

pilotos.shift() // o primeiro elemento do array será removido
console.log(pilotos) // [ 'Massa', 'Alonso' ]

pilotos.push('Bruno') // adicionando um elemento no final do array
console.log(pilotos) // [ 'Massa', 'Alonso', 'Bruno' ]

pilotos.unshift('Bruno Afonso') // adicionando um elemento no inicio do array
console.log(pilotos) // [ 'Bruno Afonso', 'Massa', 'Alonso', 'Bruno' ]

pilotos.splice(0, 0, 'Rubinho') // adicionando um elemento no indice 0 do array 
console.log(pilotos) // [ 'Rubinho', 'Bruno Afonso', 'Massa', 'Alonso', 'Bruno' ]

pilotos.splice(0, 1, 'Hamilton') // removendo o primeiro elemento e adicionando um novo
console.log(pilotos) // [ 'Hamilton', 'Bruno Afonso', 'Massa', 'Alonso', 'Bruno' ]

// retornando um pedaço do array
console.log(pilotos.slice(0, 3)) // [ 'Hamilton', 'Bruno Afonso', 'Massa' ]
console.log(pilotos.slice(2)) // [ 'Massa', 'Alonso', 'Bruno' ]

```