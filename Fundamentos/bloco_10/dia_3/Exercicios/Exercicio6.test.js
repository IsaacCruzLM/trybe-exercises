let fetchUrl = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const dog = response.json();
    return dog;
}

test('Testando fetch da url', () => {
    fetchUrl = jest.fn();
    fetchUrl.mockResolvedValue('Request Sucess');
    expect(fetchUrl()).resolves.toBe("request sucess");
    expect(fetchUrl).toHaveBeenCalled();
    expect(fetchUrl).toHaveBeenCalledTimes(1);
    fetchUrl.mockReset();
})

test('Testando fetch da url', () => {
    fetchUrl = jest.fn();
    fetchUrl.mockRejectedValue('Request failed');
    expect(fetchUrl()).resolves.toBe("request failed");
    expect(fetchUrl).toHaveBeenCalled();
    expect(fetchUrl).toHaveBeenCalledTimes(1);
    fetchUrl.mockReset();
})