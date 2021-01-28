
//FIBO example 1 condition
// const fib = (prev = 0, cur = 1) => {
//     console.log(cur);
//     if (cur < 2100) fib(cur, prev + cur);
// };

// fib();

//FIBO example 2
// const fib = (prev = 0, cur = 1) => {
//     setTimeout(() => {
//         console.log(cur);
//         fib(cur, prev + cur);
//     }, 500);
// };
// fib();

//CORRECTION
// const fib = (prev = 0, cur = 1) =>
// 	new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log(cur);
// 			resolve([cur, prev + cur]);
// 		}, 500);
// 	});

// fib()
// 	.then(([p, c]) => fib(p, c))
// 	.then(([p, c]) => fib(p, c))
// 	.then(([p, c]) => fib(p, c))
// 	.then(([p, c]) => fib(p, c))
//     .then(([p, c]) => fib(p, c));

//SUITE EXO
const fib = (prev = 0, cur = 1) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(cur);
			resolve([cur, prev + cur]);
		}, 500);
	});
const getFibonacciSuite = async () => {
    let [p, c] = [0, 1];
    while (true) {
    [p,c] = await fib(p, c);
    }
};

getFibonacciSuite();

