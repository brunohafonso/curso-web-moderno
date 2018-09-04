// strings podem ser declaradas usando aspas simples ou aspas duplas
const escola = "coder";

// retorna o valor do caractere com o indice passado
console.log(escola.charAt(4));
// imprime r

// imprime o código ASCII
console.log(escola.charCodeAt(4));
// imprime 114

// devolve o indice na string de acordo com o trecho passado
console.log(escola.indexOf("c"));
// imprime 0

/* recortando um pedaço da string,
* recebe 2 parametros o indice de inicio 
* e a quantidade de caracteres que serão capturados
*/
console.log(escola.substring(0, 3));

// substituindo os caracteres de acordo com os parametros passados
console.log(escola.replace("e", "3"));

// trasnformando a string em um array de acordo com o a string passada como paramentro
console.log(escola.split("e"));

// concatenando string
console.log("teste de" + " concatenação");


