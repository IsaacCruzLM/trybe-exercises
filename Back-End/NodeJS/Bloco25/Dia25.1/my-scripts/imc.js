const readline = require('readline-sync');

const imc = () => {
    const peso = readline.questionFloat('Qual seu peso?');
    const altura = readline.questionFloat('Qual sua altura?');
    return ((peso / Math.pow(altura, 2)).toFixed(2));
}

module.exports = imc;