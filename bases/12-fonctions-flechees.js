// trois syntaxes (quasi) équivalentes

function sum(x, y, z) {
	console.log(x, y, z);
	return x + y + z;
}

const sum = (x, y, z) => {
	console.log(x, y, z);
	return x + y + z;
};

// si votre fonction contient seulement un return, on peut se dispenser des {} et utiliser un return implicite
const sum = (x, y, z) => x + y + z;