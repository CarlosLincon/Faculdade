const cardCurso = document.querySelectorAll(".cardCurso");
const ballCards = document.querySelectorAll(".ballCards");
const setaES_Card = document.querySelector("#setaES-cards");
const setaDT_Card = document.querySelector("#setaDT-cards");
const H1Card = document.querySelector("#H1Card");
var lugarDoObjeto;
let aCard = 0;
let bCard = 1;
let cCard = 2;



setaES_Card.addEventListener("click", () => {
    if (aCard == 6) {
        aCard = 3;
        bCard = 4;
        cCard = 5;
        for (let index = 0; index < ballCards.length; index++) {
            ballCards[index].classList.remove("contagemCardAtivo");
        }
        ballCards[1].classList.add("contagemCardAtivo");
    } else if (aCard == 3) {
        aCard = 0;
        bCard = 1;
        cCard = 2;

        for (let index = 0; index < ballCards.length; index++) {
            ballCards[index].classList.remove("contagemCardAtivo");
        }
        ballCards[0].classList.add("contagemCardAtivo");
    } else {
        aCard = 6;
        bCard = 7;
        cCard = 8;

        for (let index = 0; index < ballCards.length; index++) {
            ballCards[index].classList.remove("contagemCardAtivo");
        }
        ballCards[2].classList.add("contagemCardAtivo");
    }
    for (let index = 0; index < cardCurso.length; index++) {
        cardCurso[index].classList.remove("displayOn");
        cardCurso[index].classList.remove("SlideADDCard");
        cardCurso[index].classList.remove("SlideRECard");
    }
    cardCurso[aCard].classList.add("displayOn");
    cardCurso[bCard].classList.add("displayOn");
    cardCurso[cCard].classList.add("displayOn");
    cardCurso[aCard].classList.add("SlideRECard");
    cardCurso[bCard].classList.add("SlideRECard");
    cardCurso[cCard].classList.add("SlideRECard");
});

setaDT_Card.addEventListener("click", () => {
    if (aCard == 6) {
        aCard = 0;
        bCard = 1;
        cCard = 2;
        for (let index = 0; index < ballCards.length; index++) {
            ballCards[index].classList.remove("contagemCardAtivo");
        }
        ballCards[0].classList.add("contagemCardAtivo");
    } else if (aCard == 3) {
        aCard = 6;
        bCard = 7;
        cCard = 8;

        for (let index = 0; index < ballCards.length; index++) {
            ballCards[index].classList.remove("contagemCardAtivo");
        }
        ballCards[2].classList.add("contagemCardAtivo");
    } else {
        aCard = 3;
        bCard = 4;
        cCard = 5;

        for (let index = 0; index < ballCards.length; index++) {
            ballCards[index].classList.remove("contagemCardAtivo");
        }
        ballCards[1].classList.add("contagemCardAtivo");
    }
    for (let index = 0; index < cardCurso.length; index++) {
        cardCurso[index].classList.remove("displayOn");
        cardCurso[index].classList.remove("SlideADDCard");
        cardCurso[index].classList.remove("SlideRECard");
    }
    cardCurso[aCard].classList.add("displayOn");
    cardCurso[bCard].classList.add("displayOn");
    cardCurso[cCard].classList.add("displayOn");
    cardCurso[aCard].classList.add("SlideADDCard");
    cardCurso[bCard].classList.add("SlideADDCard");
    cardCurso[cCard].classList.add("SlideADDCard");
});