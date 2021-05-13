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

new window.JustValidate('.your-form', {
    Rules: {
      email: {
          required: true,
          email: true
      },
      checkbox: {
          required: true
      },
      name: {
          required: true,
          minLength: 3,
          maxLength: 15
      },
      text: {
          required: true,
          maxLength: 300,
          minLength: 5
      },
      password: {
          required: true,
          password: true,
          minLength: 4,
          maxLength: 8
      },
      zip: {
          required: true,
          zip: true
      },
      phone: {
          phone: true
      }
  }
});