const student = { name: "John Doe", age: 14, mention: "AB", note: 12 };
const { mention, note } = student;

console.log(mention); // AB
console.log(note); // 12

// plutôt que
// console.log(student.mention);

// Exemple plus complexe de destructuring à 2 niveaux sur un tableau et un objet
const students = [
	{ name: "John Doe", mention: "AB" },
	{ name: "Jane Doe", mention: "TB" },
];
const [, { name }] = students;
console.log(name); // Jane Doe
