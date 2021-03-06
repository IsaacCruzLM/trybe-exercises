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

// Validação da data

let picker = new Pikaday({
    field: document.getElementById('datepicker'),
    format: 'D/M/YYYY',
    toString(date, format) {
        // you should do formatting based on the passed format,
        // but we will just return 'D/M/YYYY' for simplicity
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },
    parse(dateString, format) {
        // dateString is the result of `toString` method
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    }
});

// Validação dos campos

new JustValidate('.your-form', {
    rules: {
        name: {
            required: true,
            minLength: 3,
            maxLength: 40
        },
        email: {
            required: true,
            email: true,
            maxLength: 50
        },
        cpf: {
            required: true,
            maxLength: 11
        },
        address: {
            required: true,
            maxLength: 200
        },
        city: {
            required: true,
            maxLength: 28
        },
        state: {
            required: true,
        },
        radio: {
            required: true,
        },
        text: {
            required: true,
            maxLength: 1000
        },
        position: {
            required: true,
            maxLength: 40
        },
        description: {
            required: true,
            maxLength: 500
        },
        date: {
            required: true,
        }
    },
    messages: {
        name: {
          required: 'O campo de nome é obrigatório.',
          maxLength: 'O limite é de 40 caracteres.'
        },
        email: {
          required: 'O campo de email é obrigatório.',
          email: 'O email digitado não é válido.',
          maxLength: 'O limite é de 50 caracteres.'
        },
        cpf: {
          required: 'O campo de CPF é obrigatório.',
          maxLength: 'O limite é de 11 caracteres.'
        },
        address: {
          required: 'O campo endereço é obrigatório.',
          maxLength: 'O limite é de 200 caracteres.'
        },
        city: {
          required: 'O campo cidade é obrigatório.',
          maxLength: 'O limite é de 28 caracteres.'
        },
        state: {
          required: 'O campo estado é obrigatório.',
        },
        radio: {
          required: 'A escolha de um item é obrigatória.',
        },
        text: {
          required: 'Este campo é obrigatório.',
          maxLength: 'O limite é de 1000 caracteres.'
        },
        position: {
          required: 'Este campo é obrigatório.',
          maxLength: 'O limite é de 40 caracteres.'
        },
        description: {
          required: 'Este campo é obrigatório.',
          maxLength: 'O limite é de 500 caracteres.'
        },
        date: {
          required: 'Este campo é obrigatório.',
        }
      },
});
// Limpar forumlario

const clearButton = document.querySelector('.clear-button');
function clearFields() {
  const formElements = document.querySelectorAll('input');
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
  };
  const textAreas = document.querySelectorAll('textarea');
  for (let index = 0; index < textAreas.length; index += 1) {
    const usertextArea = textAreas[index];
    usertextArea.value = '';
  };
}

clearButton.addEventListener('click', clearFields);
