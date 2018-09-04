/* 
* Template strings servem para facilitar o processo de contatenar 
* uma ou mais string e variaveis, são envolvidas em crases ``
*/

const meuNome = "Bruno Afonso";
// Essa seria a forma convencional de se fazer
console.log("meu nome é " + meuNome);

// Usando template string
console.log(`meu nome é ${meuNome}`);

// Nota: dentro do template string é possivel chamar uma função
// Criei uma função que transforma todas os caracteres em maiusculos
const toUpper = text => text.toUpperCase();

// E aqui utilizo o templete string chamando a função
console.log(`meu nome é ${toUpper("Bruno Afonso")}`);
