# fundamentos javascript aula 25
## operadores de destructuring

novo recurso do es2015

Exemplos de utilização

```javascript
const pessoa = {
    nome: "Bruno",
    idade: 23,
    endereco: {
        logradouro: "rua dos bobos",
        numero: 0
    }
}

// desestruturando o objeto pessoa
const {nome, idade} = pessoa;
console.log(nome); // imprime Bruno
console.log(idade); // imprime 23

// // desestruturando o objeto pessoa e setando nomes personalizados para os atributos
const {nome: n, idade: i} = pessoa;
console.log(n, i); // imprime Bruno 23

// desestruturando o objeto endereço dentro de pessoa
const { endereco: { logradouro, numero } } = pessoa;
console.log(logradouro, numero); // imprime rua dos bobos 0

// desestruturando um array
const [a] = [10];
console.log(a); // imprime 10


// desestruturando um array com mais elementos
const [n1, ,n3, ,n5, n6 = 0] = [10, 7, 9, 56];
console.log(n1, n3, n5, n6);

// função que recebe o operador destructuring como paramentro
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand({ max: 50, min: 40 })); // imprime um numero aleatorio entre 40 e 50

function randArray([min = 0, max = 1000]) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor); 
}

console.log(randArray([7, 20])); // imprime um numero aleatorio entre 7 e 20
```