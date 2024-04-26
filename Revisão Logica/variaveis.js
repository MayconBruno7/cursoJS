// var, let, const

// var -> ES5 - cross-browser

// let e const -> ES2015 

let teste = 'minha string';
teste = 10;

const teste2 = 10;
let teste3;

teste3 = 20;

console.log(teste3);
console.log(12); 
console.log(teste);

const teste4 = "Eu sou inexplicavel";
console.log(teste4)


// tipo number

console.log(typeof teste3, typeof teste, typeof teste4, "-----");

const n1 = 10;
const n2 = 1.2;

console.log(`O tipo de n1 é ${typeof n1} e o seu valor é ${n1}`);
console.log(`O tipo de n2 é ${typeof n2} e o seu valor é ${n2}`);

// tipo boolean

const isVAlid = true
console.log(`isValid: ${isVAlid}`);

let varTest = null;
console.log(varTest);
console.log(typeof varTest);

varTest = 10;
console.log(typeof varTest, varTest);

