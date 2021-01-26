let numbers = [1, 2, 3, 4, 5, 7, 8, 9, 10];
// Attention c'est seulement une copie de référence, les 2 noms pointent vers le même tableau
let referenceCopy = numbers;
// On peut utiliser le destructuring pour faire une shallow copy - une copie indépendante
let shallowCopy = [...numbers];

numbers.push(11);

console.log(numbers);
console.log(referenceCopy);
console.log(shallowCopy);