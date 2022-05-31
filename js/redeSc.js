const rds = document.querySelector("#rede-sociais");
const imgSC = document.querySelector("#img-redeSC");

rds.addEventListener("click", () => {
    rds.classList.toggle("click")
});

setInterval(function() {
    // imgSC.classList.toggle("instagram");
    // if (imgSC.className == "instagram") {
    //     imgSC.setAttribute("src", "./Images/rede-sociais/instagram.png")
    // } else if (imgSC.className == "facebook") {
    //     imgSC.classList.toggle("facebook");
    //     imgSC.setAttribute("src", "./Images/rede-sociais/facebook.png")
    // } else {

    //     imgSC.setAttribute("src", "./Images/rede-sociais/whatsapp.png")
    // }

}, 2500);