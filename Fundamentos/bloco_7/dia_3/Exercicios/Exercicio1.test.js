const sum = require('./Exercicio1')

test('Testa função soma', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
    expect(() => {sum(4, '5')}).toThrowError();
})