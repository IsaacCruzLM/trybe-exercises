const changeString = (string) => {
    let newString = '';
    for (let index = 0; index < string.length; index += 1){
        string[index] == 'x' ? newString += 'Trybe':  newString += string[index];
    };
    return newString;
}

const skillsArray = ['resolução de problemas', 'comunicação', 'HTML', 'CSS', 'JavaScript'];

const concatSting = (string, array) => {
    array.sort(function(a, b) {
        let x = a.toUpperCase();
        let y = b.toUpperCase();
        return x == y ? 0 : x > y ? 1 : -1;
    });
    return `${changeString(string)} Minhas cinco principais habilidades são:
    -${array[0]}
    -${array[1]}
    -${array[2]}
    -${array[3]}
    -${array[4]}`
}

console.log(concatSting('A x é TOP!', skillsArray));