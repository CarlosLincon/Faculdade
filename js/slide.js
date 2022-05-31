//Slide-Informativo
const quantasImg = 4;
// Váriaveis do Slide Informativo
const setaEsquerda = document.querySelector("#setaEsquerda");
const setaDireita = document.querySelector("#setaDireita");
const DivSlide1 = document.querySelector(".slide-container");
const slide1IMG = document.querySelector("#slide1");
var valorCLick = 1;

// End Informativo

slide1IMG.addEventListener("mouseover", () => {

    setaEsquerda.classList.add("displayOn");
    setaDireita.classList.add("displayOn");
})

slide1IMG.addEventListener("mouseout", () => {

    setaEsquerda.classList.remove("displayOn");
    setaDireita.classList.remove("displayOn");
})

setaEsquerda.addEventListener("mouseover", () => {

    setaEsquerda.classList.add("displayOn");
    setaDireita.classList.add("displayOn");
})
setaEsquerda.addEventListener("mouseout", () => {

    setaEsquerda.classList.remove("displayOn");
    setaDireita.classList.remove("displayOn");
})


setaDireita.addEventListener("mouseover", () => {

    setaEsquerda.classList.add("displayOn");
    setaDireita.classList.add("displayOn");
})
setaDireita.addEventListener("mouseout", () => {

    setaEsquerda.classList.remove("displayOn");
    setaDireita.classList.remove("displayOn");
})


setaEsquerda.addEventListener("click", () => {
    valorCLick--;
    slide1IMG.classList.remove("SlideRE");
    slide1IMG.classList.remove("SlideADD");
    checkIMGES(valorCLick);
});

setaDireita.addEventListener("click", () => {
    valorCLick++;
    slide1IMG.classList.remove("SlideRE");
    slide1IMG.classList.remove("SlideADD");
    checkIMGDI(valorCLick);
});

// Funçôes

function checkIMGES(valor) {
    let img = new Image();
    img.setAttribute("src", `Images/Slide/Slide(${valor}).jpg`);
    let onerrorCallback = function() {
        valorCLick = quantasImg;
        let srclet = `Images/Slide/Slide(${valorCLick}).jpg`;
        slide1IMG.classList.add("SlideRE");
        slide1IMG.src = srclet;
    };

    let onloadCallback = function() {
        srclet = `Images/Slide/Slide(${valor}).jpg`;
        slide1IMG.src = srclet;
        slide1IMG.classList.add("SlideRE");
    };

    img.onerror = onerrorCallback;
    img.onload = onloadCallback;
}

function checkIMGDI(valor) {
    console.log(valorCLick);
    let img = new Image();
    img.setAttribute("src", `Images/Slide/Slide(${valor}).jpg`);
    let onerrorCallback = function() {
        valorCLick = 1;
        let srclet = `Images/Slide/Slide(${valorCLick}).jpg`;
        slide1IMG.classList.add("SlideADD");
        slide1IMG.src = srclet;
    };
    let onloadCallback = function() {
        srclet = `Images/Slide/Slide(${valor}).jpg`;
        slide1IMG.src = srclet;
        slide1IMG.classList.add("SlideADD");
    };

    img.onerror = onerrorCallback;
    img.onload = onloadCallback;
}