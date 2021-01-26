class Player {
	constructor(name, life, force) {
		this._name = name;
		this._life = life;
		this._force = force;
		this._shot = 0;
	}
	get name() {
		return this._name;
	}
	get shot() {
		return this._shot;
	}
	// calculer un dommage infligé par un coup
	computeDmg() {
		return Math.round(Math.random() * this._force * 100) / 100;
	}
	decrementLife(points) {
		this._life = Math.round(100 * (this._life - points)) / 100;
	}
	incrementShot() {
		this._shot++;
	}
	isAlive() {
		return this._life > 0;
	}
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
		let round = 0;
		while (this._player1.isAlive() && this._player2.isAlive()) {
			// déterminer un assaillant
			const [assaillant, victim] =
				Math.random() > 0.5
					? [this._player1, this._player2]
					: [this._player2, this._player1];
			// calculer le dmg infligé par cet assaillant (méthode computeDmg de l'assaillant)
			// retirer ce dmg des points de vie de la victime
			victim.decrementLife(assaillant.computeDmg());
			// incrémenter le compteur shot de l'assaillant
			assaillant.incrementShot();
			round++;
		}
		// Afficher le gagnant, afficher un log de la partie
		const [winner, loser] = this._player1.isAlive()
			? [this._player1, this._player2]
			: [this._player2, this._player1];
		console.log(`Le gagnant est ${winner.name}.
Il a battu ${loser.name} au bout de ${round} combats.
Il a frappé ${winner.shot} fois.`);
	}
}

const dragon = new Dragon("Smaug", 100, 10);
const chevalier = new Knight("Lancelot", 100, 10);
const game = new Game(dragon, chevalier);
game.run();

//console.log(game);