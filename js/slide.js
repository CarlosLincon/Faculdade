//Slide-Informativo
const quantasImg = 4;
const slideCtrl = document.querySelector(".ctrlSlide");
var ball = [];

criandoElemento(ball, quantasImg, slideCtrl, "ball");




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


function criandoElemento(elemento, quantos, filho, classe) {

    for (x = 1; x <= quantos; x++) {
        elemento[x] = document.createElement("div");
        elemento[x].classList.add(`${classe}`);
        filho.appendChild(elemento[x]);
    }



}

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