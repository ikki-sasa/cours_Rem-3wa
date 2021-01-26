class Player {
	constructor(name, life, force) {
		this._name = name;
		this._life = life;
		this._force = force;
		this._shot = 0;
	}
	// calculer un dommage infligé par un coup
	computeDmg() {}
}

class Dragon extends Player {}

class Knight extends Player {}

class Game {
	constructor(p1, p2) {
		this._player1 = p1;
		this._player2 = p2;
	}
	// gérer les combats
	run() {
		// Tant que les 2 persos sont vivants
		////// déterminer un assaillant
		////// calculer le dmg infligé par cet assaillant (méthode computeDmg de l'assaillant)
		////// retirer ce dmg des points de vie de la victime
		////// incrémenter le compteur shot de l'assaillant
		// Afficher le gagnant, afficher un log de la partie
	}
}

const dragon = new Dragon("Smaug", 100, 10);
const chevalier = new Knight("Lancelot", 100, 10);
const game = new Game(dragon, chevalier);
game.run();