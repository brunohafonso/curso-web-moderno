# fundamentos javascript aula 5
## tipagem fraca

Javascript possui tipagem fraca, ou seja, uma variavel pode inicialmente receber uma string e posteriormente receber um dado do tipo number conforme o exemplo abaixo.

```javascript
    let qualquer = 'teste';
    console.log(typeof qualquer);
    // imprimie string
    qualquer = 5;
    console.log(typeof qualquer);
    // imprimie number
```