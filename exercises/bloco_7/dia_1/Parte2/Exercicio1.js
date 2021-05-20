let fatorialNumber = 1;
const fatorial = (number) => {
    return (number == 1 || number == 0) ? 1 : number * fatorial(number - 1);
}

console.log(fatorial(3));