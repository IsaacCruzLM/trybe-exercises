function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  // Exercicio 1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let ulDays = document.querySelector("#days");

for (let index = 0; index < dezDaysList.length; index += 1){
    let element = document.createElement("li");
    element.innerText = dezDaysList[index];
    element.className = "day";

    if (dezDaysList[index] === 24 || dezDaysList[index] === 31 ) {
        element.className = "day holiday";
    };

    if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
        element.className = "day friday";
    };

    if (dezDaysList[index] === 25 ) {
        element.className = "day friday holiday";
    };

    ulDays.appendChild(element);
};

// Exercicio 2

function holidayButton (string) {
    let buttonContainer = document.querySelector(".buttons-container");

    let buttonHoliday = document.createElement("button");
    buttonHoliday.innerText = string;
    buttonHoliday.id = "btn-holiday";

    buttonContainer.appendChild(buttonHoliday);
}

holidayButton("Feriados");

// Ecercicio 3

let buttonHoliday = document.querySelector("#btn-holiday");
let atived = false;

function showHolidays () {
    let holidays = document.querySelectorAll(".holiday")

    if (atived === false){
        for (let index = 0; index < holidays.length; index += 1){
            holidays[index].style.backgroundColor = "rgb(0, 128, 0)"
            holidays[index].style.color = "white";
        };

        atived = true;
    } else if (atived === true) {
        for (let index = 0; index < holidays.length; index += 1){
            holidays[index].style.backgroundColor = "rgb(238, 238, 238)";
            holidays[index].style.color = "#777";
        };

        atived = false;
    };
}

buttonHoliday.addEventListener("click", showHolidays);

//Excercicio 4

function fridayButton (string) {
    let buttonContainer = document.querySelector(".buttons-container");

    let buttonFriday = document.createElement("button");
    buttonFriday.innerHTML = string;
    buttonFriday.id = "btn-friday";

    buttonContainer.appendChild(buttonFriday);
}

fridayButton("Sexta-Feira");

//Excercicio 5


let buttonFriday = document.querySelector("#btn-friday");
let atived2 = false;
let fridays = document.querySelectorAll(".friday");

let defaultFridays = [];
for (let index = 0; index < fridays.length; index += 1){
    defaultFridays[index] = fridays[index].innerHTML;
};

function showFridays () {
   
    if (atived2 === false){
        for (let index = 0; index < fridays.length; index += 1){
            fridays[index].innerHTML = "Sexta-Feira";
        };

        atived2 = true;
    } else if (atived2 === true) {
        for (let index = 0; index < fridays.length; index += 1){
            fridays[index].innerHTML = defaultFridays[index];
        };
        atived2 = false;
    };
}

buttonFriday.addEventListener("click", showFridays);

// Exercicio 6

function zoomInDay(event){
    event.target.style.fontSize = "35px";
    event.target.style.color = "black";
};

function zoomOutDay (event){
    event.target.style.fontSize = "20px";
    event.target.style.color = "#777";
};

let daysList = document.querySelectorAll(".day");

for (let index = 0; index < daysList.length; index += 1){
    daysList[index].addEventListener("mouseover", zoomInDay);
    daysList[index].addEventListener("mouseleave", zoomOutDay);
};

// Exercicio 7

let myTasks = document.querySelector(".my-tasks");

function createTarefas (string) {
    let element = document.createElement("span");
    element.innerHTML = string;

    myTasks.appendChild(element);
};

createTarefas("Atividade 5.3");

// Exercicio 8

function createLegend (color) {
    let element = document.createElement("div");
    element.style.backgroundColor = color;
    element.className = "task";

    myTasks.appendChild(element);
};

createLegend("green");