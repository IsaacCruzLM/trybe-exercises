let a = 10;
let b = 26;
let maiorValor;
function maiorValue (a, b) {

    if (a > b) {
        maiorValor = a;
    }
    else {
        maiorValor = b;
    }

    return maiorValor;
}

console.log(maiorValue(a, b));