const pessoa = {nome: 'Bruno'}
pessoa.nome = 'Bruno Afonso'
console.log(pessoa) // { nome: 'Bruno Afonso' }

// aqui congelamos o objeto e tornamos as propriedades constante
Object.freeze(pessoa)
pessoa.nome = 'Bruno Henrique Afonso'
console.log(pessoa) // { nome: 'Bruno Afonso' }
