//Exercicio 1 - Palindromo

function verificadorDePalindromo(string) {
    let result;
    let palindromo = "";

    for (let index = string.length -1; index >= 0; index -= 1) {
        palindromo += (string[index]);
    }

    if (palindromo === string) {
        result = true;
    } else {
        result = false;
    }

    return result;
}

console.log(verificadorDePalindromo("araras"));

//Exercicio 2 - Indice de maior valor;

let arrayTest = [2, 3, 6, 7, 10, 1];

function maiorIndice(array) {

    let IndiceDoMaiorValor = 0;

    for (let index = 1; index < array.length; index += 1) {

        if (array[IndiceDoMaiorValor] < array[index]) {
            IndiceDoMaiorValor = index;
        };
    }

    return IndiceDoMaiorValor;

}

console.log(maiorIndice(arrayTest));

// Exercicio 3 - Menor valor

let arrayTest2 = [2, 3, 6, 7, 10, 7];

function menorIndice(array) {

    let IndiceDoMenorValor = 0;

    for (let index = 1; index < array.length; index += 1) {

        if (array[IndiceDoMenorValor] > array[index]) {
            IndiceDoMenorValor = index;
        };
    }

    return IndiceDoMenorValor;

}

console.log(menorIndice(arrayTest2));

// Exercicio 4 - Nome com menos caracteres

let arrayTest3 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function menorCaracteres(array) {

    let stringDoMenorValor = array[0];

    for (let index = 1; index < array.length; index += 1) {
        let str1 = stringDoMenorValor;
        let str2 = array[index];

        if (str1.length < str2.length) {
            stringDoMenorValor = str2;
        };
    }

    return stringDoMenorValor;

}

console.log(menorCaracteres(arrayTest3));

// Exercicio 5 - Número que mais se repete

