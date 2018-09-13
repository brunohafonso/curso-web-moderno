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
