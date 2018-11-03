# orientação a objetos aula 06
## funções importantes de objetos

```javascript
const pessoa = {
    nome: 'Bruno',
    idade: 23,
    peso: 75
}

// retorna os atributos do objetos
console.log(Object.keys(pessoa)); // [ 'nome', 'idade', 'peso' ]
// retorna os valores do atributos de um objeto
console.log(Object.values(pessoa)); // [ 'Bruno', 23, 75 ]
// retorna os atributos e os valores de um objeto
console.log(Object.entries(pessoa)); // [ [ 'nome', 'Bruno' ], [ 'idade', 23 ], [ 'peso', 75 ] ]

// destructuring
Object.entries(pessoa).forEach(([atributo, valor]) => {
    console.log(`${atributo}: ${valor}`);
});

// definindo uma propriedade nessa função podemos definir algumas caracteristicas da proprieedade
Object.defineProperty(pessoa, 'dataNascimento', {
    // define se a propriedade será listada no object.keys
    enumerable: false,
    // se pode ser alterada
    writable: false,
    // definindo valor da propriedade
    value: '01/01/2018'
});

console.log(pessoa.dataNascimento); // 01/01/2018
pessoa.dataNascimento = '09/07/2017'
console.log(pessoa.dataNascimento); // 01/01/2018
console.log(Object.keys(pessoa)); // [ 'nome', 'idade', 'peso' ]

// Object.assign {ECMAScript 2015}
// serve para concatenar todos os objetos que forem passados como parametro
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)
console.log(obj) // { a: 4, b: 2, c: 3 }
```