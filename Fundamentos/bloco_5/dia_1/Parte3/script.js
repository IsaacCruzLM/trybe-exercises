// Header

document.querySelector("#header-container").style.background = "green";
document.querySelector("#header-container").style.height = "20px";
document.querySelector("#header-container").style.padding = "10px";

document.querySelector("header h1").style.fontSize = "20px";

//Body

document.querySelectorAll(".emergency-tasks div")[0].style.background = "pink";
document.querySelectorAll(".emergency-tasks div")[1].style.background = "pink";
document.querySelectorAll(".emergency-tasks div h3")[0].style.background = "#A42DF3";
document.querySelectorAll(".emergency-tasks div h3")[1].style.background = "#A42DF3";

document.querySelectorAll(".no-emergency-tasks div")[0].style.background = "#dbd96d";
document.querySelectorAll(".no-emergency-tasks div")[1].style.background = "#dbd96d";
document.querySelectorAll(".no-emergency-tasks div h3")[0].style.background = "#545345";
document.querySelectorAll(".no-emergency-tasks div h3")[1].style.background = "#545345";

let quadro = document.querySelectorAll("section div");
for (let index = 0; index < quadro.length; index += 1) {
    quadro[index].style.margin = " 0 10px 20px 10px";
};

// Footer

document.querySelector("#footer-container").style.background = "#003533";