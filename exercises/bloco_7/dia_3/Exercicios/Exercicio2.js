const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'Retorno não esperado');
assert.notStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'Retorno não esperado');

let array = [1, 2, 3, 4, 5, 6];
myRemove(array, 8);
assert.deepStrictEqual(array, [1, 2, 3, 4, 5, 6]);

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
