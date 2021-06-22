const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, curr) => acc + curr.split('').reduce((acc2, curr2) => curr2 === "A" || curr2 === "a" ? acc2 + 1 : acc2, 0), 0)
}

console.log(containsA())

assert.deepStrictEqual(containsA(), 20);