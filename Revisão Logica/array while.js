// Criar um array com numeros randomicos não repetidos
function generateRandomNumber(max) {
    return parseInt(Math.random() * max)
}

let arr = []

while (arr.length <= 10) {
    
    let randomNumber = generateRandomNumber(30)

    if (arr.indexOf(randomNumber) < 0) {
        arr.push(randomNumber)
    } else {
        console.log('Já existe no array')
    }
}

console.log(arr)