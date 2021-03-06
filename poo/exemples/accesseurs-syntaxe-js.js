class Model {
	// constructeur
	constructor(tableName) {
		// Je veux manipuler cette propriété comme si elle était private
		this._table = tableName;
	}

	get table() {
		// intérêt possible d'un getter : modifier la valeur avant de la retourner
		return this._table.toUpperCase();
	}

	set table(tableName) {
		// intérêt possible d'un setter : ajouter une validation
		if (tableName.length > 20) {
			throw new Error("nom de table trop long");
		}
		this._table = tableName;
	}
}

const userModel = new Model("user");

// Je m'interdis les accès directs en lecture ou écriture depuis l'extérieur à cette prop (même si c'est parfaitement valide)
//console.log(userModel._table);
//userModel._table = "users";

// A la place je veux utiliser mes accesseurs
console.log(userModel.table); // appelle implicitement l'accesseur en lecture get table
userModel.table = "loremipsumdolorsitamet"; // appelle implicitement l'accesseur en écriture set table