let randomNumber = Math.ceil(Math.random() * 100);

test('Testa numero aleatorio', () => {
    randomNumber = jest.fn().mockReturnValue(10);
    expect(randomNumber()).toBe(10);
    expect(randomNumber).toBeCalled();
    expect(randomNumber).toBeCalledTimes(1);
})