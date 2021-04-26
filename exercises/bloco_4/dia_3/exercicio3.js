let n = 6;

for(let index = 1; index <= n; index += 1) {
    
    let linha = "";

    for (let index3 = index; index3 <= n; index3 += 1) {

        linha += " ";

    }

    for (let index2 = 1; index2 <= index; index2 += 1 ) {

        linha += "*"

    }

    console.log(linha);
}