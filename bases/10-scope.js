let a = 11;

function foo() {
	a = 9;
	console.log(a); // affiche 10
}

// affiche 10
foo();

// affiche 11
console.log(a);