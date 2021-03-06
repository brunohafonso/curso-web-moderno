/*
* Quando trabalhando com objetos temos a possibilidade
* de atribuição por referencia, ou seja, no exemplo abaixo tanto a 
* quanto b terão referencia para a mesma alocação de memório 
* e alterando qualquer um deles o valor será alterado para os dois.
*/
const a = {name: 'teste'};
const b = a;
console.log(b);
// imprime {name: 'teste'}

/*
* Quando trabalhamos com tipos primitivos (number, string, bool)
* temos a atribuição por valor, ou seja, os valores das variaveis são independentes
*/
let c = 3;
let d = c;
d++;
console.log(c);
// imprime 3

// declarando uma variavel sem iniciala
let valor;
console.log(valor);
// imprime undefined, que é quando uma variavel foi declarada mas não inicializada

valor = null;
console.log(null);
// imprime null, que é quando uma variavel não está apontando para nenhum espaço de memoria

// Obs: para zerar uma referencia utilize sempre o null