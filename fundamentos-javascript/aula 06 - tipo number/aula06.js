const peso1 = 1.0;

// convertendo para o tipo number
const peso2 = Number('2.0');

// verificando se a variavel é inteira
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.345;
const avaliacao2 = 6.4432;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

// formantando o resultado para que aparecam apenas 2 casas decimais
console.log(media.toFixed(2));

// convertendo o number para string
console.log(media.toString());

// convertendo o dado para binario
console.log(media.toString(2));

// number é o tipo de dado
console.log(typeof media);

// Number é uma função
console.log(typeof Number);
