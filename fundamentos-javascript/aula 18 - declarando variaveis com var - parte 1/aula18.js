/*
* declarando uma variavel usando var mesmo que dentro de 
* um bloco estará visivel em qualquer parte do programa
*/
{
    {
        {
            { 
                var sera = "sera?" 
            }
        }
    }
}

console.log(sera);
// imprime sera?


/* Variaveis definidas dentro de uma função 
* só são acessiveis dentro desta mesma função
*/

function local() {
    var testeLocal = "local";
    console.log(testeLocal);
    // imprime local
}

console.log(testeLocal); 
// gera o erro testeLocal is not defined

var numero = 1;
{
    var numero = 2;
    console.log("dentro =", numero);
    // imprime dentro = 2
}
console.log("fora =", numero);
// imprime fora = 2