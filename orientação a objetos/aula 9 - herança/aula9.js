// criando novos metodos

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

Array.prototype.first = function() {
    return this[0]
}

console.log('Bruno Afonso'.reverse()) // osnofA onurB
let times = ['França', 'Brasil']
console.log(times.first()) // França