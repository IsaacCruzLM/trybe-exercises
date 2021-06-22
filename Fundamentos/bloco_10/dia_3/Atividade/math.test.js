const { test, expect } = require('@jest/globals');
const { fn } = require('jest-mock');
const math = require('./math');

// test('Testando função de subtrair', () => {
//     math.subtrair = jest.fn();

//     math.subtrair(2, 1);
//     expect(math.subtrair).toHaveBeenCalled();

// })

test('Testando função de multiplicar', () => {
    math.multiplicar = jest.fn().mockReturnValue(10);

    math.multiplicar(2, 1);
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar(2, 1)).toBe(10);
})

test('Testando função de somar', () => {
    math.somar = jest.fn().mockImplementation((a, b) => a + b);

    math.somar(2, 1);
    expect(math.somar).toHaveBeenCalled();
    expect(math.somar(2, 1)).toBe(3);
    expect(math.somar).lastCalledWith(2, 1);
})

test('Testando função de dividir', () => {
    math.dividir = jest.fn()
    .mockReturnValue(15)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(5);

    expect(math.dividir(4, 1)).toBe(2);
    expect(math.dividir).toHaveBeenCalledTimes(1);
    expect(math.dividir(4, 1)).toBe(5);
    expect(math.dividir).toHaveBeenCalledTimes(2);
    expect(math.dividir(4, 1)).toBe(15);
    expect(math.dividir).toHaveBeenCalledTimes(3);
})

test('Testando função de subtrair 2', () => {
    const mockSub = jest.spyOn(math, "subtrair")
    mockSub.mockReturnValue(20);

    expect(mockSub()).toBe(20);
    expect(mockSub).toHaveBeenCalledTimes(1);

    mockSub.mockRestore();
    expect(math.subtrair(2,1)).toBe(1);
})