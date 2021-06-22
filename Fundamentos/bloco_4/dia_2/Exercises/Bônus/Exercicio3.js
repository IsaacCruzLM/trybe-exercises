let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newnumber = [];

for (let index = 0; index < numbers.length; index += 1){
  if (index < 9) {
    newnumber.push(numbers[index]*numbers[(index+1)]);
  } else {
    newnumber.push(numbers[index]*2);
  }
}

numbers = newnumber;

console.log(numbers);