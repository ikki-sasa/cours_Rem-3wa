let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// retourne la première valeur du tableau en la supprimant du tableau
numbers.shift();

function accumulator(numbers, acc = 0) {
    acc += numbers.shift();
    console.log(acc);
  // Une condition d'arrêt et retourner la somme des valeurs du tableau
        // dans la fonction on ré-appelle la fonction elle-même
    if (numbers.length > 0) {
        return  accumulator(numbers, acc);
    } else {
        return acc;
    }
    
}

console.log(accumulator(numbers)); // doit retourner 55
// console.log(numbers.reduce(acc, cur));  doit retourner 55
