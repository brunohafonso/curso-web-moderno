# fundamentos javascript aula 22
## par chave/valor

```javascript
const saudacao = "opa"; // contexto lexico 1

function exec() {
    const saudacao = "falaaa"; // contexto lexico 2
    return saudacao;
}

console.log(saudacao); // imprime opa
console.log(exec()); // imprime falaaa
```

Criando objeto literal com par chave/valor

```javascript
const cliente = {
    nome: 'Bruno',
    idade: 23,
    peso: 75,
    endereco: {
        logradouro: "rua dos bobos",
        numero: 0
    }
}
```

