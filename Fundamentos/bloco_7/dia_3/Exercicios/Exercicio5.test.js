const { test, expect } = require('@jest/globals');
const { obj1, obj2, obj3 } = require('./Exercicio5');

test('Testando retorno da Função', () => {
    expect(obj1).toEqual(obj2);
    expect(obj1).not.toEqual(obj3);
    expect(obj2).not.toEqual(obj3);
});