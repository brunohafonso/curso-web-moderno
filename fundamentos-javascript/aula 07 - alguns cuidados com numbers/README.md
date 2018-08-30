# fundamentos javascript aula 7
## alguns cuidados com numbers

Números divididos por 0 retornam infinity

```javascript 
    console.log(7 / 0);
    // imprime infinity
```

Se a string contiver um number ele faz a conversão automatica para number

```javascript
    console.log("10" / 2);
    // imprime 5
```


Fazendo operação com string que não possui numeros ele retorna NaN

```javascript
    console.log("show" * 2);
    // imprime NaN
```

O javascript não retorna o valor exato em operações com numeros decimais por que isso demanda muito tempo e para dar um retorno rapido ele retorna as operações de forma aproximada

```javascript
    console.log(0.1 + 0.7);
    // imprime 0.7999999999999999
```

Não é possível converter números literais para string

```javascript
    console.log(10.toString());
    // retorna uma exception
```

Para isso colocamos os números literais entre parenteses

```javascript
    console.log((10).toString());
    // imprime 10
```