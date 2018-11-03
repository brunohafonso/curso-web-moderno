# orientação a objetos aula 08
## herança usando prototype

```javascript
function MeuObjeto() {
}
console.log(MeuObjeto.prototype); // MeuObjeto {}

// função construtora
const obj1 = new MeuObjeto

MeuObjeto.prototype.nome = "Bruno"
MeuObjeto.prototype.falar = function()  {
    console.log(`Olá ${this.nome}`);
}

obj1.falar() // Olá Bruno
const obj2 = {}
obj2.__proto__ = MeuObjeto.prototype

obj2.falar() // Olá Bruno
```