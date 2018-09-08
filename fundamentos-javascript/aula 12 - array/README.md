# fundamentos Javascript aula 10
## array

Segundo boas praticas os arrays devem receber valores todo do mesmo tipo e arrays são do tipo Object

Iniciando um array

```javascript
    const valores = [7.7, 5.4, 5.6, 4.3];
    console.log(valores[0], valores[3]);
```

Acessando o tamanho do array

```javascript
    console.log(valores.length);
```

Adicionando valores no array 

```javascript
    // Primeira forma
    valores[4] = 7;
    console.log(valores);
```

```javascript
    // Segunda forma - array.push() adiciona um valor no final do array
    valores.push(8);
    console.log(valores);
```

Removendo valores de um array

```javascript
    // Primeira forma - array.pop() remove o ultimo de elemento de um array
    valores.pop();
    console.log(valores);
```

```javascript
    // Segunda forma - delete remove um elemento de um array de acordo com o indice informado
    delete valores[0];
    console.log(valores);
```