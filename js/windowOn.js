window.onload = function() {
    altura = window.screen.height;
    largura = window.screen.width;
    let alturaDivido = altura / 2.5;
    rds.style.transform = `translateY(${alturaDivido}px)`;
    console.log(altura);
    img.classList.add("transformOp");
    alunoMenu.classList.add("transformOp");
};