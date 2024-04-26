const arr = new Array()
arr[0] = 'Maycon'
arr[1] = 19

console.log(arr)

const arr2 = new Array(true, 'Daniel', 28, new Array(2, 4, 10))
console.log(arr2)
console.log(arr2[arr2[3].length -1])

const arr3 = ["Daniel", 40, [3, 6, 9], true]
arr3[4] = 'Novo valor'
arr3[arr3.length] = "Novo valor 2"
arr3.push('Adicionado com Push')
arr3.push('a', 'b', 'c')

console.log(arr3)
console.log(arr3[2][0])

let n = 6
console.log(arr3[n])
