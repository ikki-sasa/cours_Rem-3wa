function sumTTC(ht1, ht2, ht3, tva = 20) {
    return (ht1 + ht2 + ht3) * (1 + tva / 100);
}

constpricesHT = [100, 200, 55];
//Appler la fonction et obtenir la somme des 3 prix  TTC
console.log(sumTTSC(...pricesHT));