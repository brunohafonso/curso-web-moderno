# orientação a objetos aula 13
## henraça em class

```javascript
class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

// herdando de avo
class Pai extends Avo {
    constructor(sobrenome, profissao = 'professor') {
        super(sobrenome)
        this.profissao = profissao
    } 
}

// herdando do pai
class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho) // Filho { sobrenome: 'Silva', profissao: 'professor' }


``` 