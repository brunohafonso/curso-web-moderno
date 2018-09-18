// callback (padrão observer)
const fabricantes = ['mercedes', 'audi', 'bmw'];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

// O primeiro parametro da função imprimir é o elemento do array o segundo o indice
fabricantes.forEach(imprimir);

// Exemplo sem callback
const notas = [5, 6.8, 4.7, 6.8, 9];
let notasBaixas = [];

for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i]);
    }
}

console.log(notasBaixas); // imprime [ 5, 6.8, 4.7, 6.8 ]

// Exemplo com callback
notasBaixas = notas.filter(nota => nota < 7);
console.log(notasBaixas); // imprime [ 5, 6.8, 4.7, 6.8 ]

// Exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function(e) {
    console.log('O evento ocorreu');
};