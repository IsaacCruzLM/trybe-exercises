// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Laranja', 'Maça', 'Banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite Condensado', 'Granola', 'Chocolate'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...additionalItens, ...specialFruit];
};

console.log(fruitSalad(specialFruit, additionalItens));