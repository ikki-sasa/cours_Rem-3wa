const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const powerNumber = numbers.map((number) => number ** 2);
console.log(powerNumber);

const filteredPowerNumber = powerNumber.filter((number) => number > 10);
console.log(filteredPowerNumber);

const total = numbers.reduce((curr, acc) => curr + acc);
console.log(total); // affiche 55

const sumFilteredPowerNumbers = numbers
	.map((number) => number ** 2)
	.filter((number) => number > 10)
	.reduce((acc, curr) => curr + acc);
console.log(sumFilteredPowerNumbers);

// Reduce avancé
const students = [
	{ name: "John Doe", average: 16 },
	{ name: "Jane Doe", average: 17 },
	{ name: "Anne O'Nyme", average: 14 },
];

const classAvg =
	students.reduce((accumulator, current) => accumulator + current.average, 0) /
	students.length;

console.log(classAvg);