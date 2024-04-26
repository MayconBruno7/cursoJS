let n = 1;
n = n || 10;

// if (n) {n= 10
// }

console.log(n);

let isValid = false;

if (isValid) {
    console.log('É válido');
}

isValid && console.log('É válido!');
isValid || console.log('Não é válido');

'Olá' && 'mundo'