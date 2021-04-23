let a = 12;
let b = 11;
let c = 13;
let maiorValor;

if (a >= b && a >= c) {
    maiorValor = a;
}
else if (b >= a && b >= c) {
    maiorValor = b;
}
else {
    maiorValor = c;
}

console.log(maiorValor);