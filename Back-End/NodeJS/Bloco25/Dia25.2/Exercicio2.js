const func1 = require('./Exercicio1');

const func2 = () => {
    const n1 = Math.floor(Math.random() * 100 + 1);
    const n2 = Math.floor(Math.random() * 100 + 1);
    const n3 = Math.floor(Math.random() * 100 + 1);

    func1(n1, n2, n3)
    .then(valor => console.log(valor))
    .catch(error => console.log(error));
}

func2();