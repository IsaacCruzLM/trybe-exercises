let estadosBR = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

let selectStateForms = document.querySelector("#inputEstado")

function gerarEstadosNoForm () {
    for (let index = 0; index < estadosBR.length; index += 1) {
        let element = document.createElement("option");
        element.innerHTML = estadosBR[index];
        element.value = estadosBR[index];
        selectStateForms.appendChild(element);    
    };
};

gerarEstadosNoForm();

// Validação do ano

