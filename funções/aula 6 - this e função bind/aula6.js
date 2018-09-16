const pessoa = {
    saudacao: 'Bom Dia!',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar(); // imprime Bom Dia!

// Agora armazenando o metodo dentro de uma variavel
const falar = pessoa.falar;
/*
* Ao chamar a função é retornado undefined, pois o this variaou
* e esta bucando o atributo saudação dentro da função, mas a mesma não tem
*/
falar(); // imprime undefined

/* 
* Para resolvermos isso usamos o bind, através dele podemos definir
* qual o objeto sera resolvido pelo this
*/

const falarPessoa = pessoa.falar.bind(pessoa);
falarPessoa(); // imprime Bom Dia! conforme esperado

function Pessoa() {
    this.idade = 0;

    setInterval(function() {
        this.idade++;
        console.log(this.idade);
    }.bind(this), 1000); 
}

new Pessoa;

/*
* Obs: sem a função bind só seria impresso no console NaN, 
* usando o bind ele exerga o contexto que nós realmente queremos.
*/

// Outra forma de resolver o mesmo problema
function Pessoa() {
    this.idade = 0;
    const self = this;
    setInterval(function() {
        self.idade++;
        console.log(self.idade);
    }, 1000); 
}

new Pessoa;