let squareElt;
let btnElt;

function onClickBtn(e) {
    // e.preventDefault();
    console.log(e);
    squareElt.classList.toggle("selected");
    squareElt.innerHTML = "<h2>hey! bro</h2>";
}
// bonne pratique : attendre que le DOM soit chargé pour déclencher le code principal
document.addEventListener("DOMContentLoaded", function () {
    squareElt = document.querySelector("#square");
    btnElt = document.querySelector("#btn");
    btn.addEventListener("click", onClickBtn);
    console.log(squareElt);
});