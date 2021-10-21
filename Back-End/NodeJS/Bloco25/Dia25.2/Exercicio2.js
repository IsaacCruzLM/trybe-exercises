const func1 = require('./Exercicio1');

const func2 = async () => {
    const n1 = Math.floor(Math.random() * 100 + 1);
    const n2 = Math.floor(Math.random() * 100 + 1);
    const n3 = Math.floor(Math.random() * 100 + 1);

    try {
        const result = await func1(n1, n2, n3);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

func2();