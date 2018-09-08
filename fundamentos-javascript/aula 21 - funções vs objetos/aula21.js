console.log(typeof Object); // imprime function
console.log(typeof new Object); // imprime object
const Cliente = function() {}
console.log(typeof Cliente); // imprime function
console.log(typeof new Cliente); // imprime object

class Produto {} // es2015
console.log(typeof Produto); // imprime function
console.log(new Produto()); // imprime object
