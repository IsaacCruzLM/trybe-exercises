const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifyAnswers = (arrayRight, arrayStudent) => {
    let notaFinal = 0;
    for (let index in arrayRight) {
        if (arrayStudent[index] !== 'N.A'){
            arrayRight[index] === arrayStudent[index] ? notaFinal += 1 : notaFinal -= 0.5;
        }
    }
    return notaFinal;
}

const studentResult = (arrayRight, arrayStudent, callback) => console.log(callback(arrayRight, arrayStudent));

studentResult(rightAnswers, studentAnswers, verifyAnswers);