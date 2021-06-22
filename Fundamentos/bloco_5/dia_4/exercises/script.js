// ativando 

let body = document.querySelector("body");

body.style.backgroundColor = localStorage.getItem("backgroundColor");

body.style.color = localStorage.getItem("color");

body.style.fontSize = localStorage.getItem("fontSize");

body.style.lineHeight = localStorage.getItem("lineHeight");

body.style.fontFamily = localStorage.getItem("fontFamily");

// Cor de Fundo
function changeBackgroundColor () {
    localStorage.removeItem("backgroundColor")
    let propriedade = document.querySelector("body");
    let input = document.querySelector("#input1");
    propriedade.style.backgroundColor = input.value;

    localStorage.setItem("backgroundColor", input.value);
    input.value = "";
}

let input1 = document.querySelector("#input1");
input1.addEventListener("change", changeBackgroundColor);

//Cor do Texto
function changeColor () {
    localStorage.removeItem("color")
    let propriedade = document.querySelector("body");
    let input = document.querySelector("#input2");
    propriedade.style.color = input.value;

    localStorage.setItem("color", input.value);
    input.value = "";
}

let input2 = document.querySelector("#input2");
input2.addEventListener("change", changeColor);

//Tamanho da FOnte
function changeFontSize () {
    localStorage.removeItem("fontSize")
    let propriedade = document.querySelector("body");
    let input = document.querySelector("#input3");
    propriedade.style.fontSize = input.value;

    localStorage.setItem("fontSize", input.value);
    input.value = "";
}

let input3 = document.querySelector("#input3");
input3.addEventListener("change", changeFontSize);

//Espaçamento da linha

function changeLineHeight () {
    localStorage.removeItem("lineHeight")
    let propriedade = document.querySelector("body");
    let input = document.querySelector("#input4");
    propriedade.style.lineHeight = input.value;

    localStorage.setItem("lineHeight", input.value);
    input.value = "";
}

let input4 = document.querySelector("#input4");
input4.addEventListener("change", changeLineHeight);

//Font Family

function changeFonteFamily () {
    localStorage.removeItem("fontFamily")
    let propriedade = document.querySelector("body");
    let input = document.querySelector("#input5");
    propriedade.style.fontFamily = input.value;

    localStorage.setItem("fontFamily", input.value);
    input.value = "";
}

let input5 = document.querySelector("#input5");
input5.addEventListener("change", changeFonteFamily);
