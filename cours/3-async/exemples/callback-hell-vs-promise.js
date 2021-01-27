const concatAsync = (str) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			// exemple construit : la promesse échoue si str fait > 100 caractères
			if (str.length > 15) {
				reject(new Error(`String trop long : ${str}`));
				return;
			}
			resolve(str);
		}, 500);
	});

// concatAsync("lorem ipsum")
// 	.then((res) => console.log(res))
// 	.catch((err) => console.log(`ERREUR : ${err.message}`));

concatAsync("lorem")
	.then((res) => {
		console.log(res);
		return concatAsync(res + " ipsum");
	})
	.then((res) => {
		console.log(res);
		return concatAsync(res + " dolor");
	})
	.then((res) => {
		console.log(res);
		return concatAsync(res + " sit");
	})
	.then((res) => {
		console.log(res);
		return concatAsync(res + " amet");
	})
	.then((res) => {
		console.log(res);
	})
	.catch((err) => console.log(`ERREUR : ${err.message}`));

// const concatAsync = (str, callback) => {
// 	setTimeout(() => {
// 		callback(str);
// 	}, 500);
// };

// // CALLBACK HELL
// concatAsync("lorem", (res1) => {
// 	concatAsync(res1 + " ipsum", (res2) => {
// 		concatAsync(res2 + " dolor", (res3) => {
// 			concatAsync(res3 + " sit", (res4) => {
// 				concatAsync(res4 + " amet", (res5) => {
// 					concatAsync(res5 + " ergfez", (res6) => {
// 						concatAsync(res6 + " fef", (res7) => {
// 							concatAsync(res7 + " bttrn", (res8) => {
// 								concatAsync(res8 + " revervd", (res9) => {
// 									concatAsync(res9 + " verv", (res10) => {
// 										console.log(res10);
// 									});
// 								});
// 							});
// 						});
// 					});
// 				});
// 			});
// 		});
// 	});
// });