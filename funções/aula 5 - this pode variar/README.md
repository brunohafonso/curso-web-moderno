# funções - aula 5
## this pode variar
 
Dependendo da forma que é chamada a função o this pode variar por exemplo no navegador o this se refere ao objeto window do navegador, mas se voce associa esse this ao um evento de click ele não se refere mais ao window e isso pode gerar bugs por apresentar comportamentos diferentes do esperado

```javascript
function f() {
    return this;
}

console.log(f()); // executa no browser imprimira window
```

As arrow functions foram criadas para diminuir a sintaxe e também para evitar variações do this.