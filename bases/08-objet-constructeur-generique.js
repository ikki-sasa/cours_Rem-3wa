// déclaration de la classe
class Car {
	// constructeur générique
	constructor() {
		this.brand = "";
		this.model = "";
		this.year = 0;
		this.km = 0;
	}
}

// déclaration d'instances
const car1 = new Car();
const car2 = new Car();
car1.brand = "Fiat";
car1.model = "Uno";
car1.year = 1987;
car1.km = 170000;
car2.brand = "Lada";
car2.model = "Niva";
car2.year = 1976;
car2.km = 240000;

console.log(car1);
console.log(car2);