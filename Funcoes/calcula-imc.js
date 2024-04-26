(function(){
    function calculaIMC (peso, altura) {

        let imc = 0;

        if ((peso === undefined) || (altura === undefined)) {
            throw Error("Somente numeros são aceitos");
        } else if ((typeof peso && typeof altura) !== "number") {
            throw Error("É necessário passar um parametro");
        }
        
        imc = peso / (altura * altura);

        return imc || 0;

    }

    let imc = calculaIMC(60, 1.70);

    console.log("O seu indice de massa corpórea é " + imc);

    if (imc >= 16 && imc <= 16.9) {
        console.log("Muito abaixo do peso");
    } else if (imc <= 18.4) {
        console.log("Abaixo do peso");
    } else if (imc <= 24.9) {
        console.log("Peso normal");
    } else if (imc <= 29.9) {
        console.log("Acima do peso");
    } else if (imc <= 34.9) {
        console.log("Obesidade grau I");
    } else if (imc <= 40) {
        console.log("Obesidade grau II");
    } else {
        console.log("Obesidade grau III");
    }

})()