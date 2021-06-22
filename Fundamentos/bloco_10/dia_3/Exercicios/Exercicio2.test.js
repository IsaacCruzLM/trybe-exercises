let randomNumber = Math.ceil(Math.random() * 100);

test('Testa numero aleatorio', () => {
    randomNumber = jest.fn().mockImplementation((a, b) => a / b);
    expect(randomNumber(10, 5)).toBe(2);
    expect(randomNumber).toBeCalled();
    expect(randomNumber).toBeCalledTimes(1);
    expect(randomNumber).lastCalledWith(10, 5);
})