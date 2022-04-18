const graduaçãoLi = document.getElementById("GraduaçãoLi");
const graduaçãoUl = document.getElementById("GraduaçãoUl");

graduaçãoLi.addEventListener("mouseover", () => {
    graduaçãoUl.classList.add("onDisplay");
});