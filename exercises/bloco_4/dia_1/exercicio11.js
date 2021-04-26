let pecaDeXadrez = "cavalo";
let movimento;

let resultPecaXadrez = pecaDeXadrez.toLowerCase();

switch (resultPecaXadrez) {
    case "peão":
        movimento = "Uma casa para Frente";
        break;

    case "torre":
        movimento = "Coluna vertical ou horizontal";
        break;

    case "cavalo":
        movimento = "em L";
        break;

    case "bispo":
        movimento = "Em Diagonal";
        break;

    case "rainha":
        movimento = "Qualquer movimento";
        break;

    case "rei":
        movimento = "Em cruz";
        break;

    default:
        movimento = "Erro, peça inválida";
        break;
}

console.log(pecaDeXadrez,"-->", movimento)