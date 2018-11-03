const a = 1
const b = 2
const c = 3

// adicionando atributos a partir dos nomes das variaveis
const obj = { a, b, c}

// atribuindo atributos a partir do valor de uma variavel
const nomeAttr = 'nota'
const valorAttr = 7
const obj2 = {}
obj2[nomeAttr] = valorAttr
console.log(obj2) // { nota: 7 }

// outra forma de atribui atributos a partir do valor de uma variavel
const obj3 = {[nomeAttr]: valorAttr}
console.log(obj3) // { nota: 7 }


const obj5 = {
    // criando função no formato novo
    funcao1() {
        // ...
    },
    // criando função no formato antigo
    funcao2: function() {

    }
}

console.log(obj5) // { funcao1: [Function: funcao1], funcao2: [Function: funcao2] }