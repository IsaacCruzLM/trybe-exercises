const { test, expect } = require('@jest/globals');
const myFizzBuzz = require('./Exercicio4');

test('Testando retorno da Função', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
    expect(myFizzBuzz(3)).toEqual('fizz');
    expect(myFizzBuzz(5)).toEqual('buzz');
    expect(myFizzBuzz(2)).toEqual(2);
    expect(myFizzBuzz('salve')).toEqual(false);
});