function fn(cb) {
    console.log("Executar ação de callback")
    console.log(typeof cb)
    typeof cb === "function" && cb()
}

function callback() {
    console.log("Função passada por parametro")
}

fn(callback)

const obj = {
    callback: callback
}
obj.callback()

function fn2(n) {
    return function(n1) {
        return n * n1
    }
}

const funcao2   = fn2(10)
const mult      = funcao2(2)
console.log(mult)

function fn3() {
    return function() {
        console.log("Função retornada por parametro")
    }
}

const funcao3 = fn3()