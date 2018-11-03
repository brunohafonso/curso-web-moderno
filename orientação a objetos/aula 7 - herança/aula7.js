// objeto em javascript tem referencia ao seu prototype

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);

// ps: apenas funções tem o atributo prototype

// cadeia de prototipos { prototype chain }
Object.prototype.attr0 = '0' //  má pratica
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr0) // 0
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) // 0 A B C

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if(this.velAtual + delta < this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h.`
    }
}

const ferrariEnzo = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvoClassico = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrariEnzo, carro)
Object.setPrototypeOf(volvoClassico, carro)
ferrariEnzo.aceleraMais(50)
volvoClassico.aceleraMais(100)
console.log(ferrariEnzo.status()) // 50Km/h de 324Km/h.
console.log(volvoClassico) // { modelo: 'V40', status: [Function: status] }
console.log(volvoClassico.status()) // V40: 100Km/h de 200Km/h.

// usando Object.create para associar ao aobjeto pai
const paizao = { nome: 'Bruno', corCabelo: 'preto' }
const filha = Object.create(paizao)
filha.nome = 'Ana'
console.log(filha)
const filha2 = Object.create(paizao, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome);
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha));
console.log(Object.keys(filha2));


// para pegar as propriedades do proprio objeto
for(let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}