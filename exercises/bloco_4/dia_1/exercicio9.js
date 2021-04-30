let anguloA = 10;
let anguloB = 70;
let anguloC = 100;

let somaAngulos = anguloA + anguloB + anguloC;

let resultado = "";

function result(somaAngulos){
    if (somaAngulos == 180) {
        resultado = "É um triangulo";
    }
    else {
        resultado = "Não forma um triangulo";
    }

    return resultado;
}

console.log(result(somaAngulos));
