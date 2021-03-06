/*
* No exemplo abaixo o this não varia 
* pois utilizamos a arrow function
*/

function Pessoa() {
    this.idade = 0;

    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 2000);
}

// new Pessoa;

// Outro exemplo com a função comum
let comparaComThis = function(param) {
    console.log(this === param);
}

comparaComThis(global); // imprime this porque o this se refere ao objeto global
const obj = {};
comparaComThis = comparaComThis.bind(obj); //  fazendo o contexto do this apontar para o obj
comparaComThis(obj);

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global); // imprime false
comparaComThisArrow(module.exports); // imprime true porque o objeto global é o modulo

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj); // imprime false, porque na arrow function o this não varia, mesmo usando o bind

