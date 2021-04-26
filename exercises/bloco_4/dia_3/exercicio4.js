let n = 9;

if (n % 2 !== 0) {
    for(let index = 1; index <= n; index += 2) {
    
        let linha = "";
    
        for (let espaco1 = 1; espaco1 <= ((n - index)/2); espaco1 += 1) {
    
            linha += " ";
    
        }
    
        for (let index2 = 1; index2 <= index; index2 += 1 ) {
    
            linha += "*";
    
        }
    
        for (let espaco2 = 1; espaco2 <= ((n - index)/2); espaco2 += 1) {
    
            linha += " ";
    
        }
    
        console.log(linha);
    }

} else {

    console.log("Numero da base tem que ser ímpar");

}

