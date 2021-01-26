function getPricesTTC(items, tva = 20) {
    //retourner un tableau des prix TTC
    return items.map( (item) => item.priceHT * (1 + tva / 100));
}

const phones = [
  { name: "iphone XX", priceHT: 900 },
  { name: "iphone X", priceHT: 700 },
  { name: "iphone B", priceHT: 200 },
];


const sumTTC = getSumTTC(phones);
console.log(sumTTC); //[10800, 840, 240]