// Criando uma função com assinatura sem paramentro
/*
* Mas isso não significa que não podemos passar paremetros nela
* basta utilizarmos a propriedade arguments para recuperar os parametros passados. 
*
*/
function soma() {
   let soma = 0;
   for(let i in arguments) {
    soma += arguments[i];
   } 

   return soma;
}

console.log(soma()); // imprime 0
console.log(soma(6, 65, 35435, 56)); // imprime 35562
console.log(soma('t', 5, 4543, 'fsf')); // imprime 0t54543fsf