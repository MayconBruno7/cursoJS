let idade = 21;
let paisPresentes = false;
let comprouPassagem = true;

const podeViajar = (idade >= 18 || paisPresentes) && comprouPassagem;
// const podeViajar = idade >= 18 || false;
// const podeViajar = true || false;

console.log(`Pode viajar: ${podeViajar}`);

// let msgMaiorIdade = ""

// if (idade >= 18) {
//     msgMaiorIdade   = 'É maior de idade'
// } else {
//     msgMaiorIdade = 'É menor de idade'
// }

// Operador ternário
let msgMaiorIdade = (idade >= 18) ? 'É maior de idade' : 'É menor de idade'
// Fim do operador ternario

// if (comprouPassagem) {
//     console.log("Sim, comprou o bilhete!");
// } else{
//     console.log("Não, pois não comprou o bilhete");
// }

if (comprouPassagem) {
    console.log("Sim, comprou o bilhete!");

    if (idade >= 18) {
        console.log("Pode viajar sozinho pois é maior de idade");
    } else{
        console.log("Não pode viajar pois não é maior de idade");
    }
}

let n1 = 6
let n2 = 0
let media = (n1 + n2) / 2

console.log(`Média: ${media}`);

if (n1 === 0 || n2 === 0) {
    console.log('O aluno foi reprovado');
} else if ( media < 7) {
    console.log('Reprovado mas há como recuperar');
} else {
    console.log('Aprovado')
}

console.log('Saiu do bloco IF');

