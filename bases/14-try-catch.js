const checkNumber = (n) => {
    if (isNaN(Number(n))) {
        throw new Error(`${n} is not a number!`);
    }
    return n;
};

//GESTIION D'ERREUR
let useNumber = 5; //ok 

try {
    checkNumber(userNumber);
} catch (err) {
    console.log(`ERREUR: ${err.message}`);
}
console.log('ça tourne baba!');