let n = 7;

for(let index = 1; index <= n; index += 2) {
    
    let linha = "";

    for (let espaco1 = 1; espaco1 <= ((n - index)/2); espaco1 += 1) {

        linha += " ";

    }

    for (let index2 = 1; index2 <= index; index2 += 1 ) {

        linha += "*"

    }

    for (let espaco2 = 1; espaco2 <= ((n - index)/2); espaco2 += 1) {

        linha += " ";

    }


    console.log(linha);
}