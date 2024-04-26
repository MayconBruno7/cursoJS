const nomes     = ['Daniel', 'Maria','']
const pessoa    = {nome: 'Daniel', idade: 10, email: ''}
const pessoa1   = {}

const pessoas   = [ {
    nome: 'Daniel',
    idade: 40
}, {
    nome: 'Maria',
    idade: 45
}, {
    nome: 'Helena',
    idade: 28
}, {
    nome: 'Mariana',
    idade: 29
} ]

console.log(pessoas[0].nome)

for (let i = 0; i < pessoas.length; i++) {
    console.log(`${pessoas[i].nome} possui ${pessoas[i].idade}`)
}

