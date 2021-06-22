let a = 10;
let result = "";

function value(a) {
    if (a > 0) {
        result = "Valor Positivo";
    }
    else if (a < 0){
        result = "Valor Negativo";
    }
    else {
        result = "Valor neutro";
    }

    return result;
}

console.log(value(a))