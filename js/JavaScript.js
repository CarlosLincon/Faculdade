const graduaçãoDiv = document.getElementById("GraduaçãoDiv");
const graduaçãoLi = document.getElementById("GraduaçãoLi");
const graduaçãoUl = document.getElementById("GraduaçãoUl");
const academicoDiv = document.getElementById("AcademicoDiv");
const academicoLi = document.getElementById("AcademicoLi");
const academicoUl = document.getElementById("AcademicoUl");
const institucionalDiv = document.getElementById("InstitucionalDiv");
const institucionalLi = document.getElementById("InstitucionalLi");
const institucionalUl = document.getElementById("InstitucionalUl");
const element = document.getElementsByClassName("container-menu");
const rect = element[0].getBoundingClientRect();

//menu effects
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
// end menu

window.addEventListener("scroll", () => {
    var y = window.scrollY;
    if (y >= 140) {
        console.log("adsa");
        element[0].id = "fixed";
    } else if (y < 140) {
        element[0].id = " ";
    }
});