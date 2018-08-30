// numeros divididos por 0 retornam infinity
console.log(7 / 0);
// imprime infinity

// se a string contiver um number ele faz a conversão automatica
console.log("10" / 2);
// imprime 5


// fazendo operação com string que não possui numeros
console.log("show" * 2);
// imprime NaN

/* 
* o javascript não retorna o valor exato em operações com numeros decimais
* por que isso demanda muito tempo e para dar um retorno rapido 
* ele retorna as operações de forma aproximada
*/
console.log(0.1 + 0.7);
// imprime 0.7999999999999999

// não é possível converter números literais para string
//console.log(10.toString());

// para isso colocamos os números literais entre parenteses
console.log((10).toString());
// imprime 10
