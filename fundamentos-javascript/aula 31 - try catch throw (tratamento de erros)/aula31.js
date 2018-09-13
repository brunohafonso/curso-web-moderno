function tratarErroLancar(erro) {
    throw new Error("erro inesperado", erro);
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch(e) {
        tratarErroLancar(e);
    } finally {
        console.log('finalizado');
    }
    
}

const obj = { nome: "Bruno" };
imprimirNomeGritado(obj);