/* 
* arrow function tem duas funções sintaxe reduzida e evitar a variação do this
*/

// sintaxe comum
let dobro = function(a) {
    return a * 2;
}

// Sintaxe arrow function
dobro = (a) => {
    return 2 * a;
}


// Sintaxe arrow function com retorno implicito
dobro = a => a * 2;

console.log(dobro(4)); // imprime 8 

// Mais um função na sintaxe comum
let ola = function() {
    return 'Olá';
}

// Refatorando a função Ola
ola = () => 'Olá';
ola = _ => 'Olá'; // possui parametro mas que pode ser ignorado
console.log(ola()); // imprime Olá