/*
Définition la plus simple possible de la composition: quand une instance d'une classe possède dans l'une de ses propriétés une instance d'une autre classe 
*/

class Person {
	constructor(firstName, lastName, cars = []) {
		this._firstName = firstName;
		this._lastName = lastName;
		this._cars = cars;
	}

	addCar(car) {
		this._cars.push(car);
	}
}

class Car {
	constructor(brand, model, year) {
		this._brand = brand;
		this._model = model;
		this._year = year;
	}
}

const car1 = new Car("Fiat", "Uno", 1995);
const car2 = new Car("Toyota", "Yaris", 2019);

const person1 = new Person("John", "Doe");
person1.addCar(car1);
person1.addCar(car2);

console.log(person1);

console.log(person1.cars[0].brand); // Fiat