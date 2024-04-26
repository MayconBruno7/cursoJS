let x   = 10;
x       = "Uma string";
console.log(x);

let msg = "Uma \"string";
console.log(msg);

console.log("Olá" * 2);

function teste() {
    console.log(this);
}
teste()

const teste2 = () => {
    console.log('teste2');
    console.log(this);
}

const obj = {
    n: 0, teste2: teste, teste, teste2
}

obj.teste2()