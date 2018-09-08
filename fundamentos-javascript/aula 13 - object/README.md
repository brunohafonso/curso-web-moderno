# fundamentos Javascript aula 10
## object

Iniciando um objeto

```javascript
    const object = { };
```

Adicioando uma propriedade a um objeto de forma dinamica

```javascript
    object.nome = "Bruno Afonso";
    object.idade = 23;
```

Outra forma de criar um objeto passando as chaves valores

```javascript
    const potro = {
        pernas: 4,
        engracado: true
    };
```

Percorrendo as propriedades de um array

```javascript
    for(var key in object) {
        console.log(object[key]);
    }   
```

Transformando um objeto em json

```javascript
    console.log(JSON.stringify(object));
```