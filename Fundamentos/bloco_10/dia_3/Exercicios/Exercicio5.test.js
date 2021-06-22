const functions = require('./Exercicio4');

test('Testa primeira função', () => {
    const firstFunc = jest.spyOn(functions, 'toUpperCase');
    firstFunc.mockImplementation((a) => a.toLowerCase());
    expect(firstFunc("Salve")).toBe('salve');
    expect(firstFunc).toBeCalled();
    expect(firstFunc).toBeCalledTimes(1);
    expect(firstFunc).lastCalledWith('Salve');

    functions.toUpperCase.mockRestore();

    expect(functions.toUpperCase("lowercase")).toBe("LOWERCASE")
});