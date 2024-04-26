// + - * / Resto da divisão = %, Potencia = **

let n1 = 10
let n2 = 5

// Operadores aritmeticos
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);
console.log(2 ** 3);

// Operadores de atribuição
let n3 = 25;
// n3 = n3 + 15;

n3 += 2;
console.log(n3);

// Incremento e Decremento
let i = 0;

i++;
console.log(i);

// Comparação
/*
    Igualdade de valor ==
    Igualdade de valor e tipo === 
    Maior que >, menor que <, maior igual >=, menor igual <=
    Valores diferentes !=
    Valores e tipos diferentes!==
*/

console.log(n1, n2, n3);
let n5 = "10";
console.log(n1 == n5);// retorna true
console.log(n1 === n5);// retorna False pois são de tipos diferentes

console.log(n2 <= 10);
console.log(n2 >= 10);

console.log(n2 != "10");
console.log(n2 !== "10");

// Operadores lógicos
// AND = (&&), OR (||), NOT A(!A)
/*
Para uma pessoa viajar para o exterior: Precisa ser maior de 18 anos ou acompanhado dos pais
e ter comprado a passagem
*/ 

let idade = 21;
let paisPresentes = false;
let comprouPassagem = false;

const podeViajar = (idade >= 18 || paisPresentes) && comprouPassagem;
// const podeViajar = idade >= 18 || false;
// const podeViajar = true || false;

console.log(`Pode viajar: ${podeViajar}`);

console.log(n1, n2);

n1 = 6
n2 = 8

let media = (n1 + n2) / 2

console.log(`Média: ${media}`);