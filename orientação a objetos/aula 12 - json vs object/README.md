# orientação a objetos aula 12
## JSON vs OBJECT

```javascript
const pessoa = { 
    nome: 'Bruno',
    idade: 23,
    falar() {
        console.log(`Olá ${this.nome}`)
    }
}

// transformando e JSON
console.log(JSON.stringify(pessoa))

// transformando JSON em object
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
```

Obs: os atributos e as strings do JSON devem ser delimitados entra aspas duplas


