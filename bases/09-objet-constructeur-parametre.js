// déclaration de la classe
class Car {
	// constructeur paramétré
	constructor(brand, model, year, km = 0) {
		this.brand = brand;
		this.model = model;
		this.year = year;
		this.km = km;
	}

	drive(km) {
		this.km += km;
	}
}

// déclaration d'instances
const car1 = new Car("Fiat", "Uno", 1987, 170000);
const car2 = new Car("Lada", "Niva", 1976, 240000);
const car3 = new Car("Audi", "RS3", 2020);

car2.drive(500);

console.log(car1);
console.log(car2);