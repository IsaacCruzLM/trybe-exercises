let n = 9;

if (n % 2 !== 0) {

    //Primeira Linha da Pirâmide

    let linha1 = "";

    for (let espaco1 = 1; espaco1 <= ((n - 1)/2); espaco1 += 1) {

        linha1 += " ";

    };

    linha1 += "*";

    for (let espaco2 = 1; espaco2 <= ((n - 1)/2); espaco2 += 1) {

        linha1 += " ";

    };

    console.log(linha1);

    //Meio da Pirâmide

    for(let index = 3; index < n; index += 2) {
    
        let linha = "";

        for (let espaco1 = 1; espaco1 <= ((n - index)/2); espaco1 += 1) {
    
            linha += " ";
    
        };
    
        linha += "*";

        for (let index2 = 1; index2 <= index - 2; index2 += 1 ) {
    
            linha += " ";
    
        };
    
        linha += "*";
    
        for (let espaco2 = 1; espaco2 <= ((n - index)/2); espaco2 += 1) {
    
            linha += " ";
    
        };
    
        console.log(linha);
    };

       //Final da Pirâmide

    let ultLinha = "";

    if (n > 1) {

        for (let index3 = 1; index3 <= n; index3 += 1) {

            ultLinha += "*"

        };

        console.log(ultLinha);
    }

} else {

    console.log("Numero da base tem que ser ímpar");

}

