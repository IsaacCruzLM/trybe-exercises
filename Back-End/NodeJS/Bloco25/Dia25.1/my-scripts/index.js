const imcCalculator = require('./imc');

const main = () => {
    const imc = imcCalculator(67, 1.74);
    console.log(`Seu IMC é: ${imc}`);
};

main();