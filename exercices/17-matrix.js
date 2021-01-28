const fs = require("fs");

const getDataFromFile = (filePath) =>
	new Promise((resolve, reject) => {
		fs.readFile(filePath, { encoding: "utf8" }, (err, data) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(JSON.parse(data));
		});
	});

getDataFromFile("./data/matrix.json").then(({ matrix }) => {
	const fullMatrix = matrix.map((line) => {
		// garder uniquement les valeurs numériques de la ligne (retirer les none)
		const numbers = line.filter((val) => val !== "None");
		// calculer leur moyenne (les sommer avec reduce, diviser par le nombre de notes)
		const lineAvg =
			Math.round(
				(100 *
					numbers.reduce(
						(accumulator, currentValue) => accumulator + currentValue
					)) /
					numbers.length
			) / 100;
		// remplacer les "None" de la ligne par la moyenne
		const completeLine = line.map((val) => (val === "None" ? lineAvg : val));
		// retourner la ligne complétée
		return completeLine;
	});
	console.log(fullMatrix);
});