function teste(cb) {
    console.log("Função teste");
    console.log(cb)
    cb()
}

function fn() {
    console.log("Função anonima de callback");
}

teste(fn);