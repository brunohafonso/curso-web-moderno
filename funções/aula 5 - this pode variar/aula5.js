/* 
* Dependendo da forma que é chamada a função o this pode variar
* por exemplo no navegador o this se refere ao objeto window do nvegador
* mas se voce associa esse this ao um evento de click ele não se refere mais ao window
* e isso pode gerar bugs por apresentar comportamentos diferentes do esperado
*/

function f() {
    return this;
}

console.log(f()); // executa no browser imprimira window

/*
* As arrow functions foram criadas para diminuir a sintaxe e também
* para evitar variações do this
*/