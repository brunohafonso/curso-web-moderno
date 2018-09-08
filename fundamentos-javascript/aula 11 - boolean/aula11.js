// declarando uma variavel do tipo bool e passando o valor literal
let isAtivo = false;
console.log(isAtivo);

// declarando uma variavel do tipo bool e passando o valor literal
isAtivo = true;
console.log(isAtivo);

// para converter um valor que não é do tipo bool para bool usamos a exclamação
isAtivo = 1;
console.log(!!isAtivo);

// casos em que se retorna true
console.log(!!3); // true
console.log(!!-1); // true
console.log(!!' '); // true
console.log(!!'texto'); // true
console.log(!!{}); // true
console.log(!!Infinity); // true
console.log(!!(isAtivo = true)); // true

// casos em que se retorna false
console.log(!!0); // false
console.log(!!''); // false
console.log(!!null); // false
console.log(!!NaN); // false
console.log(!!undefined); // false
console.log(!!(isAtivo = false)); // false


// verificando se uma determinada string está vazia e atribui um valor dafault
let nome = '';
console.log(nome || 'Desconhecido');

