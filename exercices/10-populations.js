const populations = [
	{ id: 0, name: "Alan" },
	{ id: 1, name: "Albert" },
	{ id: 2, name: "Jhon" },
	{ id: 3, name: "Brice" },
	{ id: 4, name: "Alexendra" },
	{ id: 5, name: "Brad" },
	{ id: 6, name: "Carl" },
	{ id: 7, name: "Dallas" },
	{ id: 8, name: "Dennis" },
	{ id: 9, name: "Edgar" },
	{ id: 10, name: "Erika" },
	{ id: 11, name: "Isaac" },
	{ id: 12, name: "Ian" },
];

populations.sort((a, b) => a.name.length - b.name.length);

for (const person of populations) {
	person.lenName = person.name.length;
}

// const popWithLenName = populations.map((person) => ({
// 	...person,
// 	lenName: person.name.length,
// }));

console.log(populations);

// Grouper les personnes par longueur de prénom / version longue

// const lenNames = new Set(populations.map((person) => person.lenName));

// const groupedPopulations = [];

// for (const lenName of lenNames) {
// 	const subList = populations.filter((person) => person.lenName === lenName);
// 	groupedPopulations.push([lenName, subList]);
// }
// const mapPopulations = new Map(groupedPopulations);
// console.log(groupedPopulations);
// console.log(mapPopulations);

// Grouper les personnes par longueur de prénom / version courte

const mapPopulations = new Map(
	[...new Set(populations.map((person) => person.lenName))].map((len) => [
		len,
		populations.filter((person) => person.lenName === len),
	])
);

console.log(mapPopulations);