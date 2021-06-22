let custo = 100;
let venda = 140;

let custoTotal = custo + 0.2*custo;

let lucro = 1000*(venda - custoTotal);

if (custo < 0 || venda < 0) {
    console.log("Erro, valor inválido");
}
else {
    console.log("O lucro total da empresa é: ",lucro,"R$");
}