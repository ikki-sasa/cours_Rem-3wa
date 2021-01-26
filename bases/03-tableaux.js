//const monTab = new Array("lorem", "ipsum", "dolor");
const monTab = ["lorem", "ipsum", "dolor"];

// accès en lecture
console.log(monTab[1]); // "ipsum";

// accès en écriture
monTab[2] = "hello";
// création de nouvel index à la volée
monTab[3] = "coucou";
monTab.push("bonjour");

// propriété length
console.log(monTab);
console.log(monTab.length);

// ajout/suppression/remplacement de valeurs
monTab.splice(2, 2, "salut");
// avant : "lorem", "ipsum", "hello", "coucou", "bonjour"
// après : "lorem", "ipsum", "salut", "bonjour"
console.log(monTab);
console.log(monTab.length);