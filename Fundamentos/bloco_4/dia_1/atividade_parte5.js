let nota = 50;
let statusCandidata;

switch (true) {
    case (nota >= 80):
        statusCandidata = "Aprovada";
        break;

    case (nota>=60 && nota<80):
        statusCandidata = "Lista de Espera";
        break;

    case (nota<60):
        statusCandidata = "Reprovada";
        break;

    default:
        console.log("Não se aplica");
}

console.log(statusCandidata);
