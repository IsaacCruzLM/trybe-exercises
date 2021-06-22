const button = document.querySelector('button');

button.addEventListener('click', () => {
    document.querySelector('h1').innerHTML = parseInt(document.querySelector('h1').innerHTML) + 1;
})