const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
 Copie esse arquivo e edite apenas ele;

 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 




 

Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.

let arrayDeDivs = document.querySelectorAll("div.container div");

function adicionaClassTech (event) {
    for (let index = 0; index < arrayDeDivs.length; index += 1){
        let element = arrayDeDivs[index];
        element.classList.remove("tech");
    }

    event.target.className = "tech";
}

for (let index = 0; index < arrayDeDivs.length; index += 1){
    arrayDeDivs[index].addEventListener("click", adicionaClassTech)
}

// Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';

let inputText = document.querySelector("#input");

function addClassTech() {
    document.querySelector(".tech").innerText = inputText.value;
}

inputText.addEventListener("change", addClassTech)

//Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página. Que tal redirecionar para seu portifólio?

let top3 = document.querySelector("#mySpotrybefy");

function top3Redirect () {

    window.open("https://isaaccruzlm.github.io/");
}

top3.addEventListener("dblclick", top3Redirect)

// Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;

function changeBackgroungColor(event) {
    event.target.style.backgroundColor = "blue";
}

top3.addEventListener("mouseenter", changeBackgroungColor)