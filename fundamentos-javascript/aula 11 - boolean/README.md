# fundamentos Javascript aula 10
## boolean

Declarando uma variavel do tipo bool e passando o valor literal

```javascript
    let isAtivo = false;
    console.log(isAtivo);
```

Declarando uma variavel do tipo bool e passando o valor literal

```javascript
    isAtivo = true;
    console.log(isAtivo);
```

Para converter um valor que não é do tipo bool para bool usamos a exclamação

```javascript
    isAtivo = 1;
    console.log(!!isAtivo);
```

Casos em que se retorna true

```javascript
    console.log(!!3); // true
    console.log(!!-1); // true
    console.log(!!' '); // true
    console.log(!!'texto'); // true
    console.log(!!{}); // true
    console.log(!!Infinity); // true
    console.log(!!(isAtivo = true)); // true
```

Casos em que se retorna false

```javascript
    console.log(!!0); // false
    console.log(!!''); // false
    console.log(!!null); // false
    console.log(!!NaN); // false
    console.log(!!undefined); // false
    console.log(!!(isAtivo = false)); // false
```

Verificando se uma determinada string está vazia e atribui um valor dafault

```javascript
    let nome = '';
    console.log(nome || 'Desconhecido');
```
