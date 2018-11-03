# orientação a objetos aula 03
## objetos constantes

Para tornar um objeto constante utilizamos a função **Object.freeze()**, a mesma irá tornar o objeto e as suas propriedades constantes sem a possibilidade de alteração das mesmas.

```javascript
const pessoa = {nome: 'Bruno'}
pessoa.nome = 'Bruno Afonso'
console.log(pessoa) // { nome: 'Bruno Afonso' }

// aqui congelamos o objeto e tornamos as propriedades constante
Object.freeze(pessoa)
pessoa.nome = 'Bruno Henrique Afonso'
console.log(pessoa) // { nome: 'Bruno Afonso' }
```