// Avec une déclaration let cette ligne déclenche une erreur : la variable n'a pas encore été déclarée
// Avec une déclaration var elle aurait affiché "undefined" car la déclaration est alors "hissée" (hoisting)
//console.log(maVariable);

let maVariable;

console.log(maVariable);

maVariable = "Hello world";

// Pour une constante, la déclaration et l'assignation d'une valeur doivent se faire sur la même ligne
const maConstante = "hello";
// on ne peut pas redéfinir une constante
// maConstante = "coucou"; // ERREUR

// On stocke souvent des types objet dans des constantes. Ici par exemple un tableau
const names = ["Riri", "Fifi", "Loulou"];
// On peut continuer à modifier ce tableau
names.pop();
// On ne peut toutefois pas stocker autre chose que ce tableau dans la constante
//names = ["Pif", "Paf", "Pouf"]; // ERREUR
// ici ce qui doit rester constant est la REFERENCE (l'emplacement mémoire)