# fundamentos Javascript aula 10
## template string


Template strings servem para facilitar o processo de contatenar uma ou mais string e variaveis, são envolvidas em crases ``

Essa seria a forma convencional de se fazer utilizando o simbole + para concatenar a string com uma variavel

```javascript
    const meuNome = "Bruno Afonso";
    console.log("meu nome é " + meuNome);
``` 
Usando template string envolvendo a variavel com chaves e o cifrão

```javascript
    console.log(`meu nome é ${meuNome}`);
```

Nota: dentro do template string é possivel chamar uma função
Criei uma função que transforma todas os caracteres em maiusculos

```javascript
    const toUpper = text => text.toUpperCase();
    // E aqui utilizo o templete string chamando a função
    console.log(`meu nome é ${toUpper("Bruno Afonso")}`);
```