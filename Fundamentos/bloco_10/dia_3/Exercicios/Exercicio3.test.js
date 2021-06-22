let randomNumber = Math.ceil(Math.random() * 100);

test('Testa numero aleatorio', () => {
    randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
    expect(randomNumber(10, 5, 2)).toBe(100);
    expect(randomNumber).toBeCalled();
    expect(randomNumber).toBeCalledTimes(1);
    expect(randomNumber).lastCalledWith(10, 5, 2);

    randomNumber.mockReset();
    randomNumber.mockImplementation((a) => 2 * a)
    expect(randomNumber(10)).toBe(20);
    expect(randomNumber).toBeCalled();
    expect(randomNumber).toBeCalledTimes(1);
    expect(randomNumber).lastCalledWith(10);

})