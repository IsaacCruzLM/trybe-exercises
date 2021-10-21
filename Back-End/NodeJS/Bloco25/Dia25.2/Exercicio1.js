const func1 = (n1, n2, n3) => {
    return new Promise((resolve, reject) => {
        if ( typeof n1 !== "number" || typeof n2 !== "number" || typeof n3 !== "number" ) reject("Erro: Informe apenas números");
       const result = ((n1 + n2)/ n3) ;

       if (result < 50 ) reject("Erro: Valor muito baixo");
       resolve(`Valor: ${result}`);
    });
};

module.exports = func1;