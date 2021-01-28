class Parser {
	// propriété séparateur
	// propriété initialisée avec une valeur bidon, et qui stockera un résultat (string final, ou tableau de nombres) une fois que la méthode parse aura fait son boulot
	// constructeur
	constructor(separator) {
		this._separator = separator;
		this._numbers = [];
	}

	get str() {
		return this._numbers.join(" ");
	}

	parse(phrase) {
		//  couper la chaine à chaque séparateur pour obtenir un tableau (cf méthode split des strings)
		//  sur chaque chaine, se débarrasser des espaces superflus en début et fin de chaine (cf méthode trim des strings)
		//  filtrer le tableau de chaines pour ne garder que celles qui sont intégralement constituées de chiffres (cf méthodes Number ou parseInt, ou mieux expressions régulières)
		//  [option1] on "join" le tableau avec des espaces et on le stocke dans la propriété prévue à cet effet
		//  [option2] on stocke la tableau tel quel dans la propriété prévue à cet effet, et c'est l'accesseur qui fera le join

        // phrase.split(this.separator).map(str => str.trim()).filter(str => parseInt );
        // this._numbers = result;

        this._numbers = phrase
            .split(this._separator)
            .map((str) => str.trim())
            .filter((str) => /^\\d+/.test(str));
        console.log(this._numbers);


		this._numbers = phrase
			.split(this._separator)
			.map((str) => str.trim())
            .filter((str) => /^\d+$/.test(str));
	}
}

const phrase = "8790: bonjour le monde:123 hello:8987:7777:    9007";

const p = new Parser(":");
p.parse(phrase);
console.log(p.str);
//8790 8987 7777 9007