# fundamentos javascript aula 9
## tipo string e algumas das suas funções nativas

Strings podem ser declaradas usando aspas simples ou aspas duplas
ex: 
```javascript
    const escola = "coder";
``` 

Retorna o valor do caractere com o indice passado
ex:
```javascript
    console.log(escola.charAt(4));
    // imprime r
```

Imprime o código ASCII de um determinado caracteres de acordo com o indice passado
ex:
```javascript
    console.log(escola.charCodeAt(4));
    // imprime 114
```
Devolve o indice na string de acordo com o trecho passado
ex:
```javascript
    console.log(escola.indexOf("c"));
    // imprime 0
```

Recortando um pedaço da string, recebe 2 parametros o indice de inicio e a quantidade de caracteres que serão capturados
ex:
```javascript
    console.log(escola.substring(0, 3));
```

Substituindo os caracteres de acordo com os parametros passados
ex:
```javascript
    console.log(escola.replace("e", "3"));
```

Trasnformando a string em um array de acordo com o a string passada como paramentro
ex:
```javascript
    console.log(escola.split("e"));
```

Concatenando strings
ex: 
```javascript
    console.log("teste de" + " concatenação");
```