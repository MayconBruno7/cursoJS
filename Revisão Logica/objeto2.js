const pessoa = {
    nome: 'Maria',
    idade: 28,
    email: 'ela@gmail.com'
}

console.log(pessoa)

for (let prop in pessoa) {
    console.log(pessoa)
    console.log(pessoa[prop])
}

// for (let i = 0; i < pessoa.length; i ++) {
//     console.log(`${i}: Nome é ${nome[i]}`)
// }