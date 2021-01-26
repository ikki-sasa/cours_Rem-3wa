class Rectangle {
	constructor(w, h) {
		this._w = w;
		this._h = h;
	}
	// "double accesseur en écriture"
	setDimensions(w, h) {
		this._w = w;
		this._h = h;
	}
	get area() {
		return this._w * this._h;
	}
}

class Square extends Rectangle {
	constructor(size) {
		super(size, size);
	}
	setDimensions(w, h = null) {
		super.setDimensions(w, w);
	}
}

const rect1 = new Rectangle(100, 150);
rect1.setDimensions(100, 120);
console.log(rect1);
console.log(rect1.area);

const sq1 = new Square(40);
sq1.setDimensions(30);
console.log(sq1);
console.log(sq1.area);