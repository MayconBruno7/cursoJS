const produto = {
    nome    : 'caneta',
    qtd     : 10,
    comprar : function(n) {
        console.log(this)
        if (n > this.qtd) {
            return 'Quantidade não disponivel'
        }

        this.qtd -= n
    },
    teste1: function() {
        console.log('Teste 1')
        console.log(this)
    },
    teste2: () => {
        console.log('Teste 2')
        console.log(this)
    } 
}

produto.comprar(5)
// console.log(produto)

produto.comprar(13)
// console.log(produto)

produto.teste1()
produto.teste2()