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

// Promise.all([
// 	getDataFromFile("./data/dragons.json"),
// 	getDataFromFile("./data/relationships.json"),
// ])
// 	.then(([{ dragons }, { relationships }]) => {
// 		const mapRelationships = new Map(
// 			relationships.map((r) => [
// 				dragons.find((d) => r.id === d.id).name,
// 				r.relation.map(
// 					(friendId) => dragons.find((d) => d.id === friendId).name
// 				),
// 			])
// 		);
// 		console.log(mapRelationships);
// 	})
//   .catch((err) => console.log(err.message));

Promise.all([
	getDataFromFile("./data/dragons.json"),
	getDataFromFile("./data/relationships.json"),
])
	.then(([{ dragons }, { relationships }]) => {
		const namedRelationships = [];
		for (const relationship of relationships) {
			// nom du dragon
			let dragonName;
			for (const dragon of dragons) {
				if (dragon.id === relationship.id) {
					dragonName = dragon.name;
					break;
				}
			}
			// nom des copains
			const friendNames = [];
			for (const friendId of relationship.relation) {
				for (const dragon of dragons) {
					if (dragon.id === friendId) {
						friendNames.push(dragon.name);
						break;
					}
				}
			}
			namedRelationships.push([dragonName, friendNames]);
		}
		const mapRelationships = new Map(namedRelationships);
		console.log(mapRelationships);
	})
	.catch((err) => console.log(err.message));