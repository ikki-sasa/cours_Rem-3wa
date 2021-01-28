const fs = require("fs");

const getDataFromFile = (filePath) =>
	new Promise((resolve, reject) => {
		fs.readFile(filePath, { encoding: "utf8" }, (err, data) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(JSON.parse(data));
			console.log(JSON.parse(data));
		});
	});

getDataFromFile("./data/matrix.json").then();