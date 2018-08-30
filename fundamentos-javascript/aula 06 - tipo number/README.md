# fundamentos javascript aula 6
## tipo number

Tipo number recebe números inteiros e números decimais

alguns exemplos de uso

```javascript
    const peso1 = 1.0;

    // convertendo uma string para o tipo number
    const peso2 = Number('2.0');

    // verificando se a variavel é inteira
    console.log(Number.isInteger(peso1));
    // imprime true
    console.log(Number.isInteger(peso2));
    // imprime true


    const avaliacao1 = 9.345;
    const avaliacao2 = 6.4432;

    const total = avaliacao1 * peso1 + avaliacao2 * peso2;
    const media = total / (peso1 + peso2);

    // formantando o resultado para que aparecam apenas 2 casas decimais
    console.log(media.toFixed(2));
    // imprime 7.41

    // convertendo o number para string
    console.log(media.toString());
    //imprime 7.410466666666667

    // convertendo o dado para binario
    console.log(media.toString(2));
    // imprime 111.01101001000101000101011111101101011011100111010011

    // number é o tipo de dado
    console.log(typeof media);
    // imprime number

    // Number é uma função
    console.log(typeof Number);
    // imprime function
```