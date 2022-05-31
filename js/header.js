// Váriaveis do menu

const graduaçãoDiv = document.getElementById("GraduaçãoDiv");
const graduaçãoLi = document.getElementById("GraduaçãoLi");
const graduaçãoUl = document.getElementById("GraduaçãoUl");
const academicoDiv = document.getElementById("AcademicoDiv");
const academicoLi = document.getElementById("AcademicoLi");
const academicoUl = document.getElementById("AcademicoUl");
const institucionalDiv = document.getElementById("InstitucionalDiv");
const institucionalLi = document.getElementById("InstitucionalLi");
const institucionalUl = document.getElementById("InstitucionalUl");
const menuOff = document.getElementsByClassName("menuOFF");
const element = document.getElementsByClassName("container-menu");
const rect = element[0].getBoundingClientRect();
const img = document.getElementById("IMG");
const alunoMenu = document.getElementById("aluno-header");
const logoMenu = document.querySelector(".logo-menu");
const aluno = document.querySelector("#aluno-menu");
// end menu



// atribuições de classe posteriormente ao carregamento
window.onload = function() {
    img.classList.add("transformOp");
    alunoMenu.classList.add("transformOp");
};
//menu effects
logoMenu.addEventListener("mouseover", () => {
    graduaçãoUl.classList.remove("onDisplay");
    academicoUl.classList.remove("onDisplay");
    institucionalUl.classList.remove("onDisplay");
});

aluno.addEventListener("mouseover", () => {
    graduaçãoUl.classList.remove("onDisplay");
    academicoUl.classList.remove("onDisplay");
    institucionalUl.classList.remove("onDisplay");
});


graduaçãoLi.addEventListener("mouseover", () => {
    graduaçãoUl.classList.add("onDisplay");
    academicoUl.classList.remove("onDisplay");
    institucionalUl.classList.remove("onDisplay");
});
graduaçãoDiv.addEventListener("mouseout", () => {
    graduaçãoUl.classList.remove("onDisplay");
});

academicoLi.addEventListener("mouseover", () => {
    academicoUl.classList.add("onDisplay");
    graduaçãoUl.classList.remove("onDisplay");
    institucionalUl.classList.remove("onDisplay");
});
academicoDiv.addEventListener("mouseout", () => {
    academicoUl.classList.remove("onDisplay");
});

institucionalLi.addEventListener("mouseover", () => {
    institucionalUl.classList.add("onDisplay");
    academicoUl.classList.remove("onDisplay");
    graduaçãoUl.classList.remove("onDisplay");
});
institucionalDiv.addEventListener("mouseout", () => {
    institucionalUl.classList.remove("onDisplay");
});

window.addEventListener("scroll", () => {
    var y = window.scrollY;
    if (y >= 90) {
        element[0].id = "fixed";
    } else if (y < 90) {
        element[0].id = " ";
    }
});

for (var i = 0; i < menuOff.length; i++) {
    menuOff[i].addEventListener("mouseout", () => {
        institucionalUl.classList.remove("onDisplay");
        academicoUl.classList.remove("onDisplay");
        graduaçãoUl.classList.remove("onDisplay");
    });
}

// end menu