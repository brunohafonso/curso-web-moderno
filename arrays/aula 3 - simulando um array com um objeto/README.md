# array aula 03
## simulando um array com um objeto

```javascript
const quaseArray = {
    0: 'Rafael',
    1: 'Ana',
    2: 'Bia'
}

Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray.toString()) // [ 'Rafael', 'Ana', 'Bia' ]
```