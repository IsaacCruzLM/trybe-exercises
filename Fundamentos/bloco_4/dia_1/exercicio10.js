let anguloA = -10;
let anguloB = 90;
let anguloC = 100;

let somaAngulos = anguloA + anguloB + anguloC;

if (somaAngulos == 180) {
    console.log("É um triangulo");
    let triangulo = true;
}
else {
    console.log("Não forma um triangulo")
}

if (triangulo = true) {
    switch (true) {
        case (anguloA < 0):
            console.log("o anguloA é inválido");
            break;

        case (anguloB < 0):
            console.log("o anguloB é inválido");
            break;

        case (anguloA < 0):
            console.log("o anguloB é inválido");
            break;
        
        default:
            console.log("Nenhum angulo invalido");
    }
}