# orientação a objetos aula 10
## herança new

```javascript
function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 1)
const aula2 = new Aula('até mais', 2)
console.log(aula1, aula2) // Aula { nome: 'Bem vindo', videoID: 1 } Aula { nome: 'até mais', videoID: 2 }

// simulando o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'aula 3', 3)
const aula4 = novo(Aula, 'aula 4', 4)
console.log(aula3, aula4) // Aula { nome: 'aula 3', videoID: 3 } Aula { nome: 'aula 4', videoID: 4 }
```