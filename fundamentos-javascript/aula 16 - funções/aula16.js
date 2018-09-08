/*
* Funções em javascript podem ter retorno ou não
* assim como podem ou não receber parametros
*/

// Para definir uma função usamos a palavra reservada function
function imprimirSoma(a, b) {
    console.log(a + b);
}  

imprimirSoma(5, 7);
// // imprime 12

// Definindo uma função com valor padrão e com retorno
function soma(a, b = 0) {
    return a + b;
}

console.log(soma(5, 6));
// imprime 11

console.log(soma(6));
// imprime 6