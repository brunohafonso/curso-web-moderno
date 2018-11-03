// previnir a adição de novos atributos num objeto
const produto = Object.preventExtensions({
    nome:  'Qualquer',
    preco: 1.99,
    tag: 'promocao'
})

console.log('Extensivel:', Object.isExtensible(produto)) // Extensivel: false
delete produto.tag
produto.any = 'teste'
produto.descricao = 'testando'
console.log(produto) // { nome: 'Qualquer', preco: 1.99 }

/*  
* previnir a adição de novos atributos num objeto 
* e previnir a exclusão de atributos existentes 
*/
const pessoa = Object.seal({ nome: "bruno", idade: 23 })
console.log('selado:', Object.isSealed(pessoa))
pessoa.profissao = 'programador'
delete pessoa.idade
console.log(pessoa) // { nome: 'bruno', idade: 23 }

/*  
* previnir a adição de novos atributos num objeto,
* previnir a exclusão de atributos existentes 
* e a alteração dos valores dos atributos
*/
const empresa = Object.freeze({ nome: 'google', ramo: 'tecnologia' })
empresa.nome = 'microsoft'
delete empresa.ramo
console.log('congelado:', Object.isFrozen(empresa)) // congelado: true
console.log(empresa) // { nome: 'google', ramo: 'tecnologia' }
