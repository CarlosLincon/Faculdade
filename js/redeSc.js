const rds = document.querySelector("#rede-sociais");
const rdsh = document.querySelector("#msg");
const imgSC = document.querySelector("#img-redeSC");
var a = 0;
var b = 1;
var c = -1;
rds.addEventListener("click", () => {
    rds.classList.toggle("click");
});

const iconRede = [
    ["./Images/rede-sociais/facebook.png", "facebook"],
    ["./Images/rede-sociais/instagram.png", "instagram"],
    ["./Images/rede-sociais/whatsapp.png", "whatsapp"],
];

setInterval(function() {

    if (a == 3) {
        a = 0;
        c = -1;
    }
    if (c != -1) {
        rdsh.classList.remove(iconRede[c][1]);
    } else if (c == -1) {
        rdsh.classList.remove(iconRede[2][1]);
    }

    rdsh.classList.add(`${iconRede[a][1]}`);
    imgSC.setAttribute("src", `${iconRede[a][0]}`);
    a++;
    c = c + 1;

}, 5500);

console.table(iconRede);