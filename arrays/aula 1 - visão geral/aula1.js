// uma das forma de se criar um array
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados) // [ 'Bia', 'Carlos', 'Ana' ]

// forma literal de se criar um array
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados) // [ 'Bia', 'Carlos', 'Ana' ]

// acessando um um elemento num array
console.log(aprovados[0]) // Bia
console.log(aprovados[2]) // Ana

// adicionando um elemento num array
aprovados.push('Bruno')
console.log(aprovados) // [ 'Bia', 'Carlos', 'Ana', 'Bruno' ]

// acessandp o tamanho de um array
console.log(aprovados.length) // 4

// alterando um valor dentro do array
aprovados[0] = 'Fernando'
console.log(aprovados) // [ 'Fernando', 'Carlos', 'Ana', 'Bruno' ]

// ordenando um array
console.log(aprovados) // [ 'Fernando', 'Carlos', 'Ana', 'Bruno' ]
aprovados.sort()
console.log(aprovados) // [ 'Ana', 'Bruno', 'Carlos', 'Fernando' ]

// removendo um valor no array
delete aprovados[1]
console.log(aprovados) // [ 'Ana', <1 empty item>, 'Carlos', 'Fernando' ]

// removendo um ou mais valores num array com splice
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1)
console.log(aprovados) // [ 'Bia', 'Ana' ]
aprovados.splice(0, 2)
console.log(aprovados) // []

// removendo e adicionando valores num array com splice
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(0, 1, 'Deyvison')
console.log(aprovados) // [ 'Deyvison', 'Carlos', 'Ana' ]

