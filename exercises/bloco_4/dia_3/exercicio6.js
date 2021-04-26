let numero = 7;
let hits = 0;

if (numero > 0) {

    for (let index = 1; index <= numero; index += 1) {

        let resto = numero % index;
    
        if ( resto === 0) {
            hits += 1;
        };
    
    };
    
    switch (true) {
        case ( hits == 2 || numero == 1):
            console.log("Numero Primo");
            break;
    
        case (hits !== 2):
            console.log("Numero não é Primo");
            break;
    }

    
} else {
    
    console.log("Insira um valor inteiro, positivo (maior que zero)")

}