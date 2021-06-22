const { test, expect } = require('@jest/globals');
const myRemove = require('./Exercicio2');

test('Testando exercicio2', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});

test('Testendo se array continua o mesmo', () => {
    let array = [1, 2, 3, 4, 5, 6];
    myRemove(array, 8);
    expect(array).toEqual([1, 2, 3, 4, 5, 6]);
});