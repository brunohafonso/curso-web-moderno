class Lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(lanc => this.lancamentos.push(lanc))
    }

    listLancamentos() {
        this.lancamentos.forEach(lanc => {
            console.log(`nome: ${lanc.nome} - valor: ${lanc.valor}`)
        }) 
    }

    sumario() {
        let valorConsolidado = 0;
        this.lancamentos.forEach((lançamento) =>  valorConsolidado += lançamento.valor )
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 2102)
const contaLuz = new Lancamento('Luz', -80)

const contas = new CicloFinanceiro(11, 2018)
contas.addLancamentos(salario, contaLuz)
contas.listLancamentos() // nome: Salario - valor: 2102 nome: Luz - valor: -80
console.log(contas.sumario()) // 2022


