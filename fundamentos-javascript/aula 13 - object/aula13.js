// Iniciando um objeto
const object = {

};

// Adicioando uma propriedade a um objeto de forma dinamica
object.nome = "Bruno Afonso";
object.idade = 23;

// Outra forma de criar um objeto passando as chaves valores
const potro = {
    pernas: 4,
    engracado: true
};

// Percorrendo as propriedades de um array
for(var key in object) {
    console.log(object[key]);
}

// Transformando um objeto em json
console.log(JSON.stringify(object));