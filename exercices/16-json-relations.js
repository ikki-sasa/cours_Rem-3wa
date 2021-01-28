const fs = require("fs");

const getDataFromFile = (filePath) =>
	new Promise((resolve, reject) => {
		fs.readFile(filePath, { encoding: "utf8" }, (err, data) => {
			// impossible de lire le fichier
			if (err) {
				reject(err);
				return;
			}
			// success
			// JSON.parse permet de transformer un fichier JSON en un objet JSON JS
			resolve(JSON.parse(data));
		});
	});

Promise.all([
	getDataFromFile("./data/dragons.json"),
	getDataFromFile("./data/relationships.json"),
])
	/* La promesse globale est résolue par un tableau contenant les résolutions des 2 promesses de départ (deux objets contenant respectivement des propriétés dragons et relationships, les 2 jeux de données qui nous intéresse).
  On déstructure ce tableau principal, puis on déstructure chacun des deux objets, pour se donner un accès direct aux 2 jeux de données dans des variables dragons et relationships. */
	.then(([{ dragons }, { relationships }]) => {
		console.log("dragons", dragons);
		console.log("relationships", relationships);
		// Transformer chaque "relationship" en un tableau
		const namedRelationships = relationships.map((r) => [
			// dont le premier élément est le nom du dragon (un objet du tableau dragon) dont l'id matche avec celui référencé dans la relationship
			dragons.find((d) => r.id === d.id).name,
			// [TODO] transformer (mapper) le tableau d'ID d'amis en un tableau de noms d'amis (récupérer l'objet dragon correspondant à chaque ID, extraire son nom)
			r.relation.map((friendId) => dragons.find((d) => d.id === friendId).name),
		]);
		console.log(namedRelationships);
		const mapRelationships = new Map(namedRelationships);
		console.log(mapRelationships);
		console.log("samounnn");
	})
	.catch((err) => console.log(err.message));

// [
//   ['Common Welsh', ['Hebridean Black', 'Kayda']],
//   ...
// ]