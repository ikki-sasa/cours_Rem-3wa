const tab = ["Lorem", "ipsum", "dolor", "sit", "amet"];

// boucle for à compteur (pour les tableaux, i passe en revue les valeurs des index)
for (let i = 0; i < tab.length; i++) {
	console.log(i); // 0, 1...
	console.log(tab[i]); // "lorem", "ipsum"...
}

// boucle for...of (pour tous les itérables : tableaux Array, instances de Map, de Set...)
const names = ["Riri", "Fifi", "Loulou"];
for (const name of names) {
	console.log(name);
}
// exemple un peu plus avancé avec un Map
/*const students = new Map([
	[1, "John Doe"],
	[2, "Anne Onyme"],
]);
for (const [id, name] of students) {
	console.log(id, name);
}*/

// ne pas confondre avec for...in (uniquement pour parcourir les propriétés d'un objet litteral);
const voiture = { marque: "Lada", modele: "Niva", annee: 1987 };
for (const prop in voiture) {
	console.log(prop); // "marque", "modele", "annee";
	console.log(voiture[prop]); // "Lada", "Niva", 1987
	// attention à la ligne ci-dessus les crochets ne veulent pas dire "tableau" mais "propriété dynamique". Càd que prop va d'abord être évalué (par la chaine "marque" à la 1ere itération, "modèle" à la 2è...) et que la valeur évaluée va être utilisée comme propriété dans voiture.
	// autrement dit voiture[prop] est l'équivalent de voiture.marque à la 1ere itération, de voiture.modele à la 2ème...
}

// les classes Array, Map, Set possèdent une méthode forEach, mais il faut utiliser une fonction callback appelée à chaque itération
tab.forEach(function (el) {
	console.log(el);
});

// Enfin, les Arrays possèdent des méthodes à l'usage un peu plus spécifique qui permettent aussi de passer en revue toutes les valeurs.
// Par ex la méthode map permet de "transformer" chaque valeur d'un tableau et de créer un tableau des valeurs transformées.
// Ces méthodes prennent en paramètre une fonction callback appelée pour chaque élément du tableau. Par souci de concision on utilise souvent les fonctions fléchées ES6.
const tabEnerve = tab.map((el) => el.toUpperCase() + "!!!");
// avec une fonction classique
const tabEnerve = tab.map(function (el) {
	return el.toUpperCase() + "!!!";
});
console.log(tabEnerve);
// sans map
const tabEnerve = [];
for (const el of tab) {
	tabEnerve.push(el.toUpperCase() + "!!!");
}
// cf aussi les méthodes filter, reduce... dont on reparlera plus tard