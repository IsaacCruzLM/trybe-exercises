let a = 12;
let b = 11;
let c = 13;
let maiorValor;

function maiorValue (a, b, c) {

    if (a >= b && a >= c) {
        maiorValor = a;
    }
    else if (b >= a && b >= c) {
        maiorValor = b;
    }
    else {
        maiorValor = c;
    }

    return maiorValor;

}

console.log(maiorValue(a, b, c));