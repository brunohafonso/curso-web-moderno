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
new Pessoa;