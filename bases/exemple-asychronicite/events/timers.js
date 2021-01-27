//VERSION 1
setTimeout(function () {
    console.log("deux secondes après lancement");
}, 2000);


let cpt = 0;

setInterval(function () {
    cpt++;
    console.log(cpt);
}, 1000);

setTimeout(function () {
    clearInterval(timerID);
}, 5000);

//VERSION 2 