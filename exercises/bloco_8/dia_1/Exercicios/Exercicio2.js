const numApostado = 1;

const numVerify = (numApostado, number) => numApostado === number; 

const resultRaffle = (numApostado, func) => {
    const number = Math.ceil(Math.random()*5);
    return (func(numApostado, number)) ? console.log('Parabéns você ganhou') : console.log('Tente novamente');
}

resultRaffle(numApostado, numVerify);