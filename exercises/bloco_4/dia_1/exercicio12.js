let porcentagem = -20;

switch (true) {
    case (porcentagem >= 90 && porcentagem <=100):
        console.log("Nota A");
        break;

    case (porcentagem >= 80 && porcentagem < 90):
        console.log("Nota B");
        break;
        
    case (porcentagem >= 70 && porcentagem < 80):
        console.log("Nota C");
        break;

    case (porcentagem >= 60 && porcentagem < 70):
        console.log("Nota D");
        break;

    case (porcentagem >= 50 && porcentagem < 60):
        console.log("Nota E");
        break;

    case (porcentagem >= 0 && porcentagem < 50):
        console.log("Nota F");
        break;

    case (porcentagem > 100 || porcentagem < 0):
        console.log("Erro, nota inválida");
        break;
}