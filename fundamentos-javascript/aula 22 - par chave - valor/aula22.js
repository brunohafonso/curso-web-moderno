// par chave.valor
const saudacao = "opa"; // contexto lexico 1

function exec() {
    const saudacao = "falaaa"; // contexto lexico 2
    return saudacao;
}

// Criando objeto literal com par chave/valor
const cliente = {
    nome: 'Bruno',
    idade: 23,
    peso: 75,
    endereco: {
        logradouro: "rua dos bobos",
        numero: 0
    }
}

console.log(saudacao);
console.log(exec());