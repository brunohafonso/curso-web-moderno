/*
* Para acessar os atributos e funções de um objeto ou função
* usamos o ponto (.)
*/

const obj1 = {};
obj1.nome = "objeto";
console.log(obj1.nome); // imprime objeto

// criando uma função que recebe um parametro e popula sua atribuição
function Obj(nome) {
    this.nome = nome;
}

const teste = new Obj('bruno');
console.log(teste.nome);