# funções
## introdução a funcões

```javascript
// Criando uma função de forma literal
function func1() {

}

// Armazenando uma função numa variavel
const func2 = function() {

}

// Armazendo a função em um array
const array = [function(a, b) { return a + b }, func1, func2];
console.log(array[0](2, 3)); // imprime 5

// Armazenando no atributo de um objeto
const obj = {};
obj.falar = () => 'bla bla bla';
console.log(obj.falar()); // imprime bla bla bla

// Passar uma função como parametro de outra
function run(func) {
    func();
}

run(function() { console.log('função executada.'); }); // imprime função executada.

// Um função retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c);
    }
}
soma(2, 3)(4); // imprime 9
```