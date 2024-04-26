/* (function(){function calcularMedia(n1, n2) {
//     return (n1 + n2) / 2 
// }})()

// console.log(calcularMedia(10, 10))
*/

(function(){
    function calcularMedia() {

        let total = 0;

        let qtd = arguments.length;

        for (let i = 0; i < qtd; i++) {
            if (typeof arguments[i] !== "number") {
                throw Error("only numbers")
            }
            total += arguments[i]
        }
        return (total / qtd) || 0
    }

    let media = calcularMedia(2, 3, 4)
    console.log(media)
})()
