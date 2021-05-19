let fatorialNumber = 1;
const fatorial = (number) => {
    let previousNumber = number - 1;
    number > 1 ? fatorialNumber *= number : fatorial(previousNumber);
    return fatorialNumber;
}

console.log(fatorial(3));