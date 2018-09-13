function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log(`Aprovado com ${nota}`);
    }
}

soBoaNoticia(7); // aprovado com 7
soBoaNoticia(5.7); // não imprime nada

function seForVerdade(valor) {
    if(valor) {
        console.log(`é verdade.... ${valor}`);
    }
}

seForVerdade();
seForVerdade(null);
seForVerdade(undefined);
seForVerdade(NaN);
seForVerdade('');
seForVerdade(0);
seForVerdade(-1); // é verdade.... -1
seForVerdade(' '); // é verdade....  
seForVerdade('?'); // é verdade.... ?
seForVerdade([]); // é verdade.... 
seForVerdade([2, 5]); // é verdade.... 2,5
seForVerdade({}); // é verdade.... [object Object]

/* 
* Obs: o if sem as chaves para delimitar o bloco só interpreta uma
* sentença
*/
function teste1(num) {
    if(num > 7)
        console.log(num);
        console.log('final');
}

teste1(7); // imprime final

/* 
* Não utilizar ; na definição de um bloco de estrutura de controle 
* pois o bloco será executado independente do resultado do teste lógico
*/
function teste2(num) {
    if(num > 7); {
        console.log(num);
    }
}

teste2(6); // imprime 6

// Exemplo com IF / ELSE

const imprimirResultado = nota => {
    if(nota >= 7) {
        console.log('Aprovado');
    } else {
        console.log('Reprovado');
    }
}

imprimirResultado(7); // imprime aprovado

/*
* Obs: cuidado com o tipo do parametro passado, por ser uma linguagem de tipagem 
* fraca não será retornado erro caso seja informada uma string como parametro
*/

imprimirResultado('teste'); // imprime reprovado mesmo não passando um número como paramentro

// Exemplo com IF / ELSE IF

// função para verificar se o numero está num intervalo
Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim;
}

const imprimirResult = function(nota) {
    if(nota.entre(9, 10)) {
        console.log('Quadro de Honra');
    } else if(nota.entre(7, 8.99)) {
        console.log('Aprovado');
    } else if(nota.entre(4, 6.99)) {
        console.log('recuperação');
    } else if(nota.entre(0, 3.99)) {
        console.log('reprovado');
    } else {
        console.log('nota invalida');
    }
}

imprimirResult(10); // quadro de honra
imprimirResult(-10); // nota invalida
imprimirResult(7); // aprovado