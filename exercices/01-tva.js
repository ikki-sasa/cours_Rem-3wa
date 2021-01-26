function computeTTC(priceHT, tva = 20) {
    return priceHT + (priceHT * tva / 100);
}

console.log(computeTTC(20));
console.log(computeTTC(100));



