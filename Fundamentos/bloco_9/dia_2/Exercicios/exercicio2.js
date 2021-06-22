const geraArray = () => {
    const myArray = Array.from(
        { length: 10 },
        () =>  Math.floor(Math.random() * 50) + 1
    );
    const sumAtFor = myArray.map((number) => number * number).reduce((accumulator, currentValue) => accumulator + currentValue);
    if (sumAtFor >= 8000) {
        throw new Error();
    }
    return sumAtFor;
}

const sumArrayAtFor = (num) => {
    const array = [2, 3, 5, 10];
    return array.map((number) => num / number).reduce((acc, curr) => acc + curr);
}

const newPromise = async () => {
    try {
        const sum = await geraArray();
        const sumArray = await sumArrayAtFor(sum);
        console.log(sumArray);
    } catch (error) {
        console.log('É mais de oito mil! Essa promise deve estar quebrada!');
    }
}

newPromise();