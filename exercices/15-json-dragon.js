
const fs = require("fs");
// wrapper tout le code ci-dessus dans une fonction
const getDataFromFile = (filePath) => 
    new Promise((resovle, reject) => {
        fs.readFile(filePath, { encoding: "utf8" }, (err, data) => {
            // impossible de lire le fichier
            if (err) {
                //reject
                reject(err);
                //console.log("File read failed:", err);
                return;
            }
            // success
            // JSON.parse permet de transformer un fichier JSON en un objet JSON JS
            resolve(JSON.parse(data));
            // console.log(data);
            // console.log("File data:", JSON.parse(data));
        });
    });
    // appel function  qui prend en paramètre un chemin
    getDataFromFile("data/dragons.json")
        .then(({ dragons }) => {
            //ordonner les dragons
            dragons.sort((a, b) => b.age - a.age);
            console.log(dragons);////avec .then dragons dans le log
            //nom du plus vieux
            console.log(dragons[0].name)
            // nom du plus jeune
            console.log(dragons[dragons.length - 1].name);
            //.then((res) => {
            //destructure const { dragons } (res);
    })

.catch((err) => console.log(`ERREUR: ${err.message}`));    
// et qui retourne une promesse soit résolue par l'objet obtenu, soit rejetée en cas d'erreur

fs.sort