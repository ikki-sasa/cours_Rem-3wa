doA(function () {
	doB();

	doC(function () {
		doD();
	});

	doE();
});

doF();

// ---------------

function doA(f) {
	console.log("A");
	setTimeout(f, 0);
}
function doB() {
	console.log("B");
}
function doC(f) {
	console.log("C");
	setTimeout(f, 0);
}
function doD() {
	console.log("D");
}
function doE() {
	console.log("E");
}
function doF() {
	console.log("F");
}
