let squareElt;
let btnElt;

function onClickBtn(e) {
    // e.preventDefault();
    console.log(e);
    squareElmt.classList.toggle("selected");
    // squareElmt.innerHTML = <"">;
}
// bonne pratique : attendre que le DOM soit chargé pour déclencher le code principal
document.addEvenlistener("DomContentLoaded", function () {
    squareElt = document.querySelector("#square");
    btnElt = document.querySelector("#btn");
    btn.addEvenlistener("click", onClickBtn);
    console.log(squareElt);
});