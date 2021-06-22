const { test, expect } = require('@jest/globals');
const myRemoveWithoutCopy = require('./Exercicio3');

test('Testando retorno da Função', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});

test('Testendo se array continua o mesmo', () => {
    let array = [1, 2, 3];
    myRemoveWithoutCopy(array, 2);
    expect(array).not.toEqual([1, 2, 3]);
});