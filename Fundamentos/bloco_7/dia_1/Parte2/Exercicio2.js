const LongestWord = (word) => {
    let array = word.split(' ');
    let longestWord = '';
    for (let key of array) {
        key.length > longestWord.length ? longestWord = key : longestWord = longestWord;
    }
    return longestWord;
}

console.log(LongestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))