# funções - aula 16
## IIFE

Função imadeatamento invocada

```javascript
let a = 10;
console.log(a); // imprime 10

(function() {
    console.log("será invocada na hora");
    console.log("e fugindo do escopo mais abrangente (global)");
    let a = 20;
    console.log(a);
})();

console.log(a); // imprime 10
```

A função acima é invocada assim que o documento carrega sem interferir no escopo global