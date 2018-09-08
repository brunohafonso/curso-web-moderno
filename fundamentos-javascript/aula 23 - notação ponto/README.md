# fundamentos javascript aula 23
## notação ponto

Para acessar os atributos e funções de um objeto ou função usamos o ponto (.)

```javascript
const obj1 = {};
obj1.nome = "objeto";
console.log(obj1.nome); // imprime objeto
```

Criando uma função que recebe um parametro e popula sua atribuição

```javascript
function Obj(nome) {
    this.nome = nome;
}

const teste = new Obj('bruno');
console.log(teste.nome); // imprime bruno
```