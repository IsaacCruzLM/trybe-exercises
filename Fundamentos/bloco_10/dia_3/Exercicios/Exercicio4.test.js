const functions = require('./Exercicio4');

jest.mock('./Exercicio4');

test('Testa primeira função', () => {
    functions.toUpperCase.mockImplementation((a) => a.toLowerCase());
    expect(functions.toUpperCase("Salve")).toBe('salve');
    expect(functions.toUpperCase).toBeCalled();
    expect(functions.toUpperCase).toBeCalledTimes(1);
    expect(functions.toUpperCase).lastCalledWith('Salve');
});

test('Testa segunda função', () => {
    functions.firstLetter.mockImplementation((a) => a.charAt(a.length - 1));
    expect(functions.firstLetter("Salve")).toBe('e');
    expect(functions.firstLetter).toBeCalled();
    expect(functions.firstLetter).toBeCalledTimes(1);
    expect(functions.firstLetter).lastCalledWith('Salve');
})

test('Testa terceira função', () => {
    functions.concatString.mockImplementation((a, b, c) => a + b + c);
    expect(functions.concatString("Salve", ' truta,', ' É nois')).toBe('Salve truta, É nois');
    expect(functions.concatString).toBeCalled();
    expect(functions.concatString).toBeCalledTimes(1);
    expect(functions.concatString).lastCalledWith("Salve", ' truta,', ' É nois');
})