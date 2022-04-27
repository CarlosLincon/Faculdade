const graduaçãoDiv = document.getElementById("GraduaçãoDiv");
const graduaçãoLi = document.getElementById("GraduaçãoLi");
const graduaçãoUl = document.getElementById("GraduaçãoUl");
const academicoDiv = document.getElementById("AcademicoDiv");
const academicoLi = document.getElementById("AcademicoLi");
const academicoUl = document.getElementById("AcademicoUl");
const institucionalDiv = document.getElementById("InstitucionalDiv");
const institucionalLi = document.getElementById("InstitucionalLi");
const institucionalUl = document.getElementById("InstitucionalUl");
const setaEsquerda = document.getElementById("seta-esquerda");
const setaDireita = document.getElementById("seta-direita");
const slideDestaque = document.getElementById("slide-destaque");
const slideEsquerda = document.getElementById("slide-anterior");
const slideDireita = document.getElementById("slide-posterior");

const menuOff = document.getElementsByClassName("menuOFF");
const element = document.getElementsByClassName("container-menu");
const rect = element[0].getBoundingClientRect();
const img = document.getElementById("IMG");
const alunoMenu = document.getElementById("aluno-header");
var contadorDeClik = 1,
    contadorAnt = 0,
    contadorPost = 2;

//menu effects
window.onload = function() {
    img.classList.add("transformOp");
    alunoMenu.classList.add("transformOp");
};

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

//Slide-Informativo

setaEsquerda.addEventListener("click", () => {
    contadorDeClik--;
    console.log(contadorDeClik);
    if (contadorDeClik < 1) {
        contadorDeClik = 1;
        console.log(contadorDeClik);
    }
    contadorAnt--;
    console.log(contadorAnt);
    if (contadorAnt === -1) {
        contadorAnt = 0;
        console.log(contadorAnt);
    }
    contadorPost--;
    console.log(contadorPost);
    if (contadorPost < 2) {
        contadorPost = 2;
        console.log(contadorPost);
    }

    slideDestaque.setAttribute("src", `Images/Slide/SlideInformativo(${contadorDeClik}).webp`);
    slideEsquerda.setAttribute("src", `Images/Slide/SlideInformativo(${contadorAnt}).webp`);
    slideDireita.setAttribute("src", `Images/Slide/SlideInformativo(${contadorPost}).webp`);

});

setaDireita.addEventListener("click", () => {
    contadorDeClik++;
    contadorAnt++;
    contadorPost++;
    slideDestaque.setAttribute("src", `Images/Slide/SlideInformativo(${contadorDeClik}).webp`);
    slideEsquerda.setAttribute("src", `Images/Slide/SlideInformativo(${contadorAnt}).webp`);
    slideDireita.setAttribute("src", `Images/Slide/SlideInformativo(${contadorPost}).webp`);

})



function test