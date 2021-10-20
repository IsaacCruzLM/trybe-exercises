const imcCalculator = require('./imc');

const main = () => {
    const imc = imcCalculator();
    console.log(`Seu IMC é: ${imc}`);
};

main();