# orientação a objetos aula 05
## getters e setters

```javascript
const sequencia = {
    _valor: 1, // convenção para mostrar que a variavel é privada
    // metodo get
    get valor() { return this._valor++ },
    // método set
    set valor(valor) { 
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 10
console.log(sequencia.valor, sequencia.valor)
```